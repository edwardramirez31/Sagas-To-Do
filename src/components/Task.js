import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { DeleteForever, Edit, Save } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  checkHandler,
  removeTask,
  setIsUpdating,
  updateTask,
} from "./taskSlice";

function Task({ id, text: task, completed, isUpdating }) {
  const [text, setText] = useState(task);
  const dispatch = useDispatch();

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <ListItem button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          onClick={() => dispatch(checkHandler(id))}
        />
      </ListItemIcon>
      <ListItemText>
        {isUpdating ? (
          <TextField value={text} onChange={textChangeHandler} fullWidth />
        ) : (
          <Typography>{text}</Typography>
        )}
      </ListItemText>
      <ListItemSecondaryAction>
        {!isUpdating ? (
          <>
            <IconButton edge="end" onClick={() => dispatch(setIsUpdating(id))}>
              <Edit color="primary" />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(removeTask(id))}>
              <DeleteForever color="secondary" />
            </IconButton>
          </>
        ) : (
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => dispatch(updateTask({ text, id }))}
          >
            <Save color="primary" />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;
