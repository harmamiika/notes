import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';

import { addNote } from '../actions/index'

const AddNote = () => {
    const [input, setInput] = useState('')
    const [deadline, setDeadline] = useState('')
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()

    const sendOnEnterPress = (ev) => {
        if (ev.key === 'Enter') {
            onFormSubmit()
            ev.preventDefault()
        }
    }

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
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                fullWidth
                label="Category (optional)"
                variant="outlined"
            />
            <TextField
                onKeyPress={sendOnEnterPress}
                onChange={(e) => setDeadline(e.target.value)}
                value={deadline}
                id="date"
                label="Deadline (optional)"
                type="date"
                defaultValue=""
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button type="submit" variant="contained"
                color="primary" fullWidth>Add new Todo!</Button>
        </form>
    )
}

export default AddNote