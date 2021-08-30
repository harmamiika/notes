import React from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';

import NoteList from './NoteList';

const Recent = () => {
  const todos = useSelector((state) =>
    state.notes.filter((note) => note.category === 'Todos')
  );

  // following function is not for the innocent eyes

  // definetly paying the price for storing the dates in a very suboptimal way earlier
  // decided not to fix them though
  // insted they will stay here as a lesson and this dumbass function as a reminder
  const makeUsDate = (date) => {
    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6, 10);
    const USDate = `${month}/${day}/${year}`;
    console.log(USDate, 'yeet');
    return new Date(USDate);
  };

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
