import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { addNote } from '../actions/index'

const AddNote = () => {
    const [input, setInput] = useState('')
    const [deadline, setDeadline] = useState('')
    const [category, setCategory] = useState('todo');
    const dispatch = useDispatch()

    const sendOnEnterPress = (ev) => {
        if (ev.key === 'Enter') {
            onFormSubmit()
            ev.preventDefault()
        }
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const onFormSubmit = (event) => {
        if (event) {
            event.preventDefault()
        }

        console.log(input, 'input')
        console.log(category, 'category')
        console.log(deadline, 'deadline')

        dispatch(addNote(input, category, deadline))
        setInput('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Create todo</h1>
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
            <TextField
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
            <FormControl component="fieldset">
                <FormLabel component="legend">Select category</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={category} onChange={handleChange}>
                    <FormControlLabel value="todo" control={<Radio />} label="todo" />
                    <FormControlLabel value="book" control={<Radio />} label="book" />
                    <FormControlLabel value="movie" control={<Radio />} label="movie" />
                    <FormControlLabel value="series" control={<Radio />} label="series" />
                </RadioGroup>
            </FormControl>

            <Button type="submit" variant="contained"
                color="primary" fullWidth>Add new Todo!</Button>
        </form>
    )
}

export default AddNote