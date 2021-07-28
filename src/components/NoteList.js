import React from 'react'
import { useSelector } from 'react-redux'

const NoteList = () => {
    const notes = useSelector(state => state.notes)
    console.log(notes, 'notes')


    const renderNotes = () => {
        return notes.map(note =>
            <div key={note}>
                {note}
            </div>
        )
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