import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';

import { addNote } from '../actions/index'

const AddNote = () => {
    const [input, setInput] = useState('')
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
                    console.log(`Pressed keyCode ${ev.key}`);
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
            <Button type="submit" variant="contained"
                color="primary" fullWidth>submit</Button>
        </form>
    )
}

export default AddNote