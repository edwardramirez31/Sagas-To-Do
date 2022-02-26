import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';
import { addTask } from '../app/slices/taskSlice';

jest.mock('react-redux');

describe('Form component', () => {
  const mockedUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;
  const dispatchSpy = jest.fn();
  mockedUseDispatch.mockImplementation(() => dispatchSpy);

  beforeEach(() => {
    mockedUseDispatch.mockClear();
    dispatchSpy.mockClear();
  });

  it('should render as expected', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change letters as expected', async () => {
    render(<Form />);
    // initial value should be empty string
    const input = screen.getByDisplayValue('');
    // type something
    userEvent.type(input, 'Mock Task');
    // value typed should be on screen
    expect(screen.getByDisplayValue('Mock Task')).toBeInTheDocument();
    // dispatch an action
    userEvent.click(screen.getByText('Add'));
    // wait for Formik helper to reset values
    await waitFor(() => expect(screen.getByDisplayValue('')).toBeInTheDocument());
    // now value should be empty
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    // check dispatch call args
    expect(dispatchSpy).toHaveBeenCalledWith(addTask({ text: 'Mock Task', completed: false }));
    expect(screen.queryByDisplayValue('Mock Task')).toBeNull();
  });
});
