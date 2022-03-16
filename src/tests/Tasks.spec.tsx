import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app';
import Tasks from '../containers/Tasks';
import { MOCKED_INCOMPLETED_TASKS } from '../mock_data/tasks';
import { getTask } from '../app/slices/taskSlice';
// import userEvent from '@testing-library/user-event';

jest.mock('react-redux');

describe('Form component', () => {
  const mockedUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;
  const mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

  const dispatchSpy = jest.fn();
  mockedUseDispatch.mockImplementation(() => dispatchSpy);

  let state: RootState = { task: { tasks: [], loading: false, error: null } };

  beforeEach(() => {
    mockedUseDispatch.mockClear();
    dispatchSpy.mockClear();
    state = {
      ...state,
      task: {
        ...state.task,
        tasks: MOCKED_INCOMPLETED_TASKS,
      },
    };
    mockedUseSelector.mockClear();
    mockedUseSelector.mockImplementation((fn) => fn(state));
  });

  it('should render as expected', () => {
    const wrapper = shallow(<Tasks />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render three incompleted tasks', () => {
    render(<Tasks />);
    const items = screen.getAllByText(/TO DO MOCK *\d*/);
    expect(items).toHaveLength(3);
  });

  it('should dispatch fetch tags if array is empty', () => {
    state = {
      ...state,
      task: {
        ...state.task,
        tasks: [],
      },
    };
    render(<Tasks />);
    const items = screen.queryAllByText(/TO DO MOCK *\d*/);
    expect(items).toHaveLength(0);
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(getTask());
  });
});
