import React from 'react'

import { ListItem, Divider, ListItemText, Button } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done';

import { deleteNote } from '../actions';

const Note = ({ note }) => {

    const onDoneClick = () => {
        console.log('yoo')
    }

    const onDeleteClick = () => {

    }


    return (
        <div>
            <ListItem>
                <ListItemText primary={note} />
                <Button color='primary' onClick={onDoneClick}><DoneIcon /></Button>
                <Button color='secondary' onClick={onDeleteClick}><ClearIcon /></Button>
            </ListItem>
            <Divider />
        </div>
    )
}

export default Note