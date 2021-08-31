import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Header from './Header';
import AddNote from './AddNote';
import NoteList from './NoteList';
import Info from './Info';
import ViewNotes from './ViewNotes';
import Categories from './Categories';

import { getNotes } from '../actions';
import Recent from './Recent';

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div>
      <Header />

      <Container>
        <Switch>
          <Route path="/info">
            <Info />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/view">
            <ViewNotes />
            <NoteList notes={notes} completed={true} showButtons={false} />
          </Route>

          <Route path="/">
            <AddNote />
            <Recent />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

//                         <NoteList notes={notes} completed={false} />

// all notes
// next notes

export default App;

// data struckture ei useria koska localstorage db

// set and get notes
// notes key=id(generated) { noteContent() createonDate() completed() }
