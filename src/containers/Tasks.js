import { List } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { getTask } from "../components/taskSlice";

function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tasks.length) {
      dispatch(getTask());
    }
  });

  return (
    <List>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </List>
  );
}

export default Tasks;
