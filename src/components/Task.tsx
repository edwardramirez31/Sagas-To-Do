import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from '@material-ui/core';
import { DeleteForever, Edit, Save } from '@material-ui/icons';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { DjangoTask } from '../app/slices/taskSlice';
import { removeTask, setIsUpdating, updateTask } from '../app/slices/taskSlice';

interface Props {
  id: number;
  text: string;
  completed: boolean;
  isUpdating: boolean;
}

const Task: React.VFC<Props> = ({ id, text: task, completed, isUpdating }) => {
  const [text, setText] = useState<string>(task);
  const dispatch = useDispatch();
  const textChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
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
          onClick={(): PayloadAction<DjangoTask> =>
            dispatch(updateTask({ id, text, completed: !completed }))
          }
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
            <IconButton
              edge="end"
              onClick={(): PayloadAction<number> => dispatch(setIsUpdating(id))}
            >
              <Edit color="primary" />
            </IconButton>
            <IconButton edge="end" onClick={(): PayloadAction<number> => dispatch(removeTask(id))}>
              <DeleteForever color="secondary" />
            </IconButton>
          </>
        ) : (
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={(): PayloadAction<DjangoTask> => dispatch(updateTask({ text, id, completed }))}
          >
            <Save color="primary" />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
