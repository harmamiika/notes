import React from 'react'
import { useDispatch } from 'react-redux';

import { ListItem, Divider, ListItemText, Button } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done';

import { deleteNote } from '../actions';

const Note = ({ note }) => {
    const dispatch = useDispatch()

    const onDoneClick = () => {
        console.log('yoo')
    }

    const onDeleteClick = () => {
        dispatch(deleteNote(note.id))
    }


    return (
        <div>
            <ListItem>
                <ListItemText primary={note.content} />
                <Button color='primary' onClick={onDoneClick}><DoneIcon /></Button>
                <Button color='secondary' onClick={onDeleteClick}><ClearIcon /></Button>
            </ListItem>
            <Divider />
        </div>
    )
}

export default Note