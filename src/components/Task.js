import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import React from "react";
function Task({ value, labelId }) {
  return (
    <ListItem dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          // checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;
