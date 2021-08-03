import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { List } from '@material-ui/core'

import { getNotes } from '../actions'
import Note from './Note'

const NoteList = () => {
    const dispatch = useDispatch()

    const notes = useSelector(state => state.notes)
    console.log(notes, 'notes')

    useEffect(() => {
        dispatch(getNotes())
    }, [])



    const renderNotes = () => {
        return <List>{notes.map(note =>
            <Note key='note' note={note} />
        )}
        </List>
    }

    if (!notes) {
        return null
    }

    return (
        <div>
            {renderNotes()}
        </div>
    )
}

export default NoteList