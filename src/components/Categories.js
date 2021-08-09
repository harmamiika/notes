import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Chip from '@material-ui/core/Chip';

import NoteList from './NoteList';
import localStorageDB from '../services/localStorageDB';

const Categories = () => {
    const [viewCategory, setViewCategory] = useState(null)
    const [filteredNotes, setFilteredNotes] = useState(null)

    const notes = useSelector(state => state.notes)

    const categories = notes.reduce((categoryArray, note) => {
        if (categoryArray.includes(note.category)) {
            return categoryArray
        }
        return categoryArray.concat(note.category)
    }, [])

    const filterNotes = (viewCategory) => {
        return notes.filter(note => note.category === viewCategory)
    }


    console.log(notes, 'notes')
    console.log(categories, 'categories1231323')

    const renderCategories = () => {
        return categories.map(category => {
            if (category === undefined || null || '') {
                return <Chip
                    key={localStorageDB.makeId()}
                    label='no category'
                    clickable
                    color="primary"
                    onClick={() => setViewCategory(category)}
                />
            }
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
            <h1>Categories</h1>
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