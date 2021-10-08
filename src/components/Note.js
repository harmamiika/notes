import React from 'react';
import { useDispatch } from 'react-redux';

import { ListItem, Divider, ListItemText, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';

import { completeNote, deleteNote } from '../actions';

const useStyles = makeStyles({
  date: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Note = ({ note, showButtons = true }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDoneClick = () => {
    dispatch(completeNote(note.id));
  };

  const onDeleteClick = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <div>
      <ListItem>
        <ListItemText
          primary={note.content}
          secondary={
            note.deadline ? `Deadline: ${note.deadline.slice(0, 10)}` : ''
          }
        />
        <ListItemText
          className={classes.date}
          secondary={`Created: ${note.createDate} ${
            note.completed ? ` - Completed: ${note.completeDate}` : ''
          }`}
        />
        {showButtons && (
          <>
            <Button color="primary" onClick={onDoneClick} title="Complete note">
              <DoneIcon className={classes.doneIcon} />
            </Button>
            <Button
              color="secondary"
              onClick={onDeleteClick}
              title="Discard note"
            >
              <ClearIcon />
            </Button>
          </>
        )}
      </ListItem>
      <Divider />
    </div>
  );
};

export default Note;
