import { List } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from '../components/Task';
import { getTask } from '../components/taskSlice';

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    if (!tasks.length) {
      dispatch(getTask());
    }
  });

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
}

export default Tasks;
