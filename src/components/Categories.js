import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import NoteList from './NoteList';
import { Button, ButtonGroup, Typography } from '@material-ui/core';

import './Categories.css';

const Categories = () => {
  const [viewCategory, setViewCategory] = useState('Todos');

  const notes = useSelector((state) => state.notes);

  // reducer setup to accept possible custom categories added later
  // originally intended to do the app differently but decided against it - but wanted to keep this cool reduce function
  const categories = notes.reduce(
    (categoryArray, note) => {
      if (categoryArray.includes(note.category)) {
        return categoryArray;
      }
      return categoryArray.concat(note.category);
    },
    [
      'Todos',
      'Books',
      'Movies',
      'Shows',
      'Events',
      'Goals',
      'Projects',
      'Reminders',
      'Shopping list',
    ]
  );

  console.log(notes, 'notes');
  console.log(categories, 'categories1231323');

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Button
          color="primary"
          size="large"
          key={category}
          onClick={() => setViewCategory(category)}
        >
          {category}
        </Button>
      );
    });
  };

  return (
    <div>
      <Helmet>
        <title>Categories | LocalNotes</title>
      </Helmet>

      <Typography variant="h2" component="h1">
        Notes by category
      </Typography>

      <ButtonGroup className="category-buttons">
        {renderCategories()}
      </ButtonGroup>

      {viewCategory ? (
        <Typography variant="h3" component="h3">
          {viewCategory}
        </Typography>
      ) : (
        <h2>No category</h2>
      )}

      <NoteList
        notes={notes.filter((note) => note.category === viewCategory)}
        completed={false}
      />
    </div>
  );
};

export default Categories;

// otsikko
// kategory list
// filtered list
