import React from 'react';

import { List } from '@material-ui/core';

import Note from './Note';

const NoteList = ({ notes, completed, showButtons = true }) => {
  const renderNotes = () => {
    return (
      <List>
        {notes.map((note) =>
          completed === note.completed ? (
            <Note key={note.id} note={note} showButtons={showButtons} />
          ) : null
        )}
      </List>
    );
  };

  if (!notes) {
    return null;
  }

  return <div>{renderNotes()}</div>;
};

export default NoteList;
