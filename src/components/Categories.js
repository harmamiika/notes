import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Chip from '@material-ui/core/Chip';

const Categories = () => {
    const [viewCategory, setViewCategory] = useState(null)

    const notes = useSelector(state => state.notes)

    const categories = notes.reduce((categoryArray, note) => {
        if (categoryArray.includes(note.category)) {
            return categoryArray
        }
        return categoryArray.concat(note.category)
    }, [])


    console.log(notes, 'notes')


    console.log(categories, 'categories1231323')

    const renderCategories = () => {
        return categories.map(category => {
            if (category === undefined || null) {
                return null
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
            {viewCategory ? <h2>{viewCategory}</h2> : null}


        </div>
    )
}

export default Categories


// otsikko 
// kategory list
// filtered list