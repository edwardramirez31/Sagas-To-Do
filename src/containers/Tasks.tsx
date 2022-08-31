import { List } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from '../components/Task';
import { getTask } from '../app/slices/taskSlice';
import { getTasks } from '../app/selectors/tasks';

const Tasks = (): JSX.Element => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  useEffect(() => {
    if (!tasks.length) {
      dispatch(getTask());
    }
  }, [tasks.length]);

  return (
    <List>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          isUpdating={task.isUpdating}
        />
      ))}
    </List>
  );
};

export default Tasks;
