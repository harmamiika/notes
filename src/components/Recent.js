import React from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';

import NoteList from './NoteList';
import { makeUsDate } from '../services/localStorageDB';

const Recent = () => {
  const todos = useSelector((state) =>
    state.notes.filter((note) => note.category === 'Todos')
  );

  const recentTodos = todos.filter(
    (todo) =>
      (new Date().getTime() - makeUsDate(todo.createDate).getTime()) /
        (1000 * 60 * 60 * 24) <
      7
  );

  return (
    <div>
      <Typography variant="h3" component="h3">
        Recent todos
      </Typography>
      <NoteList notes={recentTodos} completed={false} />
    </div>
  );
};

export default Recent;
