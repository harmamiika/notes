import React from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import './Recent.css';

import NoteList from './NoteList';
import { makeUsDate } from '../services/localStorageDB';

const Recent = () => {
  const notes = useSelector((state) => state.notes);

  const recentNotes = notes.filter(
    (todo) =>
      (new Date().getTime() - makeUsDate(todo.createDate).getTime()) /
        (1000 * 60 * 60 * 24) <
      7
  );

  console.log(recentNotes, 'recentNotes');

  const category =
    recentNotes.length > 0
      ? recentNotes[recentNotes.length - 1].category
      : null;

  const notesByCategory = notes.filter(
    (note) => note.category === notes[0].category
  );

  return (
    <div>
      <Typography className="headline" variant="h3" component="h3">
        {category && `Recent ${category}`}
      </Typography>
      {category && <NoteList notes={notesByCategory} completed={false} />}
    </div>
  );
};

export default Recent;
