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

  it('should render warning label', async () => {
    render(<Form />);
    // initial value should be empty string
    const input = screen.getByDisplayValue('');
    // type something
    userEvent.click(input);
    userEvent.click(screen.getByText('Add'));
    // dispatch should not be called
    await waitFor(() => expect(screen.getByText('This is required')).toBeInTheDocument());

    expect(dispatchSpy).toHaveBeenCalledTimes(0);
    // error label should be visible
    expect(screen.getByText('This is required')).toBeInTheDocument();

    userEvent.type(screen.getByDisplayValue(''), 'M');
    // should disappear
    await waitFor(() => expect(screen.queryByText('This is required')).toBeNull());
    expect(screen.queryByText('This is required')).toBeNull();

    userEvent.type(screen.getByDisplayValue('M'), '{backspace}');
    // should appear
    await waitFor(() => expect(screen.getByText('This is required')).toBeInTheDocument());
    expect(screen.getByText('This is required')).toBeInTheDocument();
  });
});
