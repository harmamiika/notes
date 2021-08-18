import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Chip from '@material-ui/core/Chip';

import NoteList from './NoteList';

const Categories = () => {
    const [viewCategory, setViewCategory] = useState('Todos')

    const notes = useSelector(state => state.notes)


    // reducer setup to accept possible custom categories added later 
    const categories = notes.reduce((categoryArray, note) => {
        if (categoryArray.includes(note.category)) {
            return categoryArray
        }
        return categoryArray.concat(note.category)
    }, ['Todos', 'Books', 'Movies', 'Shows', 'Events', 'Goals'])

    console.log(notes, 'notes')
    console.log(categories, 'categories1231323')

    const renderCategories = () => {
        return categories.map(category => {
            return (
                <Chip
                    key={category}
                    label={category}
                    clickable
                    color="primary"
                    onClick={() => setViewCategory(category)}
                />
            )
        })
    }

    return (
        <div>
            <h1>Notes by category</h1>
            {renderCategories()}
            {viewCategory ? <h2>{viewCategory}</h2> : <h2>No category</h2>}

            <NoteList notes={notes.filter(note => note.category === viewCategory)} completed={false} />

        </div>
    )
}

export default Categories


// otsikko 
// kategory list
// filtered list