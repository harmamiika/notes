import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Typography } from '@material-ui/core';

import NoteList from './NoteList';
import { makeUsDate } from '../services/localStorageDB';

const Archive = () => {
  const completedNotes = useSelector((state) =>
    state.notes.filter((note) => note.completed === true)
  );

  const recentCompletionSortedNotes = completedNotes.sort((a, b) => {
    return (
      new Date(makeUsDate(b.completeDate)) -
      new Date(makeUsDate(a.completeDate))
    );
  });

  return (
    <div>
      <Helmet>
        <title>Archive | LocalStorageNotes</title>
      </Helmet>
      <Typography variant="h2" component="h1">
        Note Archive - completed notes
      </Typography>
      <NoteList
        notes={recentCompletionSortedNotes}
        completed={true}
        showButtons={false}
      />
    </div>
  );
};

export default Archive;
