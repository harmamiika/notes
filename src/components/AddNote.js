import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import { addNote } from '../actions/index'

const AddNote = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        dispatch(addNote(input))
        setInput('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input onChange={(e) => setInput(e.target.value)}
                value={input}>
            </input>
            <TextField
                onChange={(e) => setInput(e.target.value)}
                value={input}
                fullWidth
                id="outlined-multiline-static"
                label="Add note"
                multiline
                rows={7}
                variant="outlined"
            />
            <button>submit</button>
        </form>
    )
}

export default AddNote