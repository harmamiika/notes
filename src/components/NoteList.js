import React from 'react'
import { useSelector } from 'react-redux'

import { List } from '@material-ui/core'

import Note from './Note'

const NoteList = () => {
    const notes = useSelector(state => state.notes)
    console.log(notes, 'notes')


    //move this to app



    const renderNotes = () => {
        return <List>{notes.map(note =>
            <Note key={note.id} note={note} />
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