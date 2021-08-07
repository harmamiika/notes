import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
    const notes = useSelector(state => state.notes)

    console.log(notes, 'notes123123')

    const getCategories = () => {
        if (!notes || notes === []) {
            return null
        }

        return notes.reduce((categoryArray, note) => {
            if (categoryArray.includes(note.category)) {
                return categoryArray
            }
            return categoryArray.concat(note.category)
        }, [])
    }

    const categories = getCategories()
    console.log(categories, 'categories1231323')

    const renderCategories = () => {
        return categories.map(category => {
            return (
                <div>{category}</div>
            )
        })
    }

    return (
        <div>
            <h1>Categories</h1>
            {renderCategories()}
        </div>
    )
}

export default Categories


// otsikko 
// kategory list
// filtered list