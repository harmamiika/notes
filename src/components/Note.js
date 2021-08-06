import React from 'react'
import { useDispatch } from 'react-redux';

import { ListItem, Divider, ListItemText, Button } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';

import { completeNote, deleteNote } from '../actions';

const useStyles = makeStyles({
    date: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
})

const Note = ({ note }) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const onDoneClick = () => {
        dispatch(completeNote(note.id))
    }

    const onDeleteClick = () => {
        dispatch(deleteNote(note.id))
    }


    return (
        <div>
            <ListItem>
                <ListItemText primary={note.content} secondary={note.deadline ? `Deadline: ${note.deadline.slice(0, 9)}` : ''} />
                <ListItemText className={classes.date} secondary={`Created: ${note.createDate} ${note.completed ? ` - Completed: ${note.completeDate}` : ''}`} />
                <Button color='primary' onClick={onDoneClick}><DoneIcon className={classes.doneIcon} /></Button>
                <Button color='secondary' onClick={onDeleteClick}><ClearIcon /></Button>
            </ListItem>
            <Divider />
        </div>
    )
}

export default Note