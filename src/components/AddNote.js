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
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        if (event) {
            event.preventDefault()
        }

        console.log(input, 'input')

        dispatch(addNote(input))
        setInput('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <TextField
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        onFormSubmit()
                        ev.preventDefault()
                    }
                }}
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
                onChange={(e) => setDeadline(e.target.value)}
                value={deadline}
                fullWidth
                label="xx.xx.xx formatted deadline (optional)"
                variant="outlined"
            />
            <Button type="submit" variant="contained"
                color="primary" fullWidth>Add new Todo!</Button>
        </form>
    )
}

export default AddNote