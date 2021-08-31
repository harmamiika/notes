import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import './AddNote.css';
import { addNote } from '../actions/index';

const AddNote = () => {
  const [input, setInput] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('Todos');
  const dispatch = useDispatch();

  const sendOnEnterPress = (ev) => {
    if (ev.key === 'Enter') {
      onFormSubmit();
      ev.preventDefault();
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    console.log(input, 'input');
    console.log(category, 'category');
    console.log(deadline, 'deadline');

    dispatch(addNote(input, category, deadline));
    setInput('');
  };

  return (
    <>
      <Helmet>
        <title>Add note | LocalStorageNotes</title>
      </Helmet>
      <form onSubmit={onFormSubmit}>
        <Typography className="form-header" variant="h2">
          Create Note
        </Typography>
        <TextField
          onKeyPress={sendOnEnterPress}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          fullWidth
          id="outlined-multiline-static"
          label="Add note"
          multiline
          rows={7}
          variant="outlined"
          autoFocus
        />
        <div className="form-row">
          <FormControl component="fieldset">
            <FormLabel component="legend">Select category</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={category}
              onChange={handleChange}
            >
              <div>
                <FormControlLabel
                  value="Todos"
                  control={<Radio />}
                  label="Todos"
                />
                <FormControlLabel
                  value="Books"
                  control={<Radio />}
                  label="Books"
                />
                <FormControlLabel
                  value="Movies"
                  control={<Radio />}
                  label="Movies"
                />
                <FormControlLabel
                  value="Shows"
                  control={<Radio />}
                  label="Shows"
                />
                <FormControlLabel
                  value="Events"
                  control={<Radio />}
                  label="Events"
                />
                <FormControlLabel
                  value="Goals"
                  control={<Radio />}
                  label="Goals"
                />
              </div>
            </RadioGroup>
          </FormControl>
          <TextField
            className="deadline-field"
            onKeyPress={sendOnEnterPress}
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
            id="date"
            label="Deadline (optional)"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add new Todo!
        </Button>
      </form>
    </>
  );
};

// deadline default jotain -> event handlerin aktivoitumisen jälkeen deadlinen arvo

// deadline textfieldin default value datesta

// movies list riviin css muotoilulla tai docs

export default AddNote;
