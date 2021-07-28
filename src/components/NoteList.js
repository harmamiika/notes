import React from 'react'
import { useSelector } from 'react-redux'

const NoteList = () => {
    const notes = useSelector(state => state.notes)
    console.log(notes, 'notes')

    if (!notes) {
        return null
    }

    return (
        <div>
            list
        </div>
    )
}

export default NoteList