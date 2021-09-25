import { List } from "@material-ui/core";
import React from "react";
import Task from "../components/Task";

function Tasks() {
  const tasks = [
    { id: 1, text: "Hello", completed: false },
    { id: 2, text: "Hello", completed: false },
    { id: 3, text: "Hello", completed: false },
  ];
  return (
    <List>
      {tasks.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return <Task key={value} value={value} labelId={labelId} />;
      })}
    </List>
  );
}

export default Tasks;
