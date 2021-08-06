import dbService from '../services/localStorageDB'

export const addNote = (note, category, deadline = null) => async dispatch => {
    const noteDB = dbService.addNote(note, category, deadline)

    dispatch({
        type: 'ADD_NOTE',
        payload: noteDB
    })
}

export const getNotes = () => async dispatch => {
    const notes = dbService.getNotes()

    console.log(notes, 'notes GET')

    dispatch({
        type: 'GET_NOTES',
        payload: notes
    })
}

export const deleteNote = (id) => async dispatch => {

    dbService.DBdeleteNote(id)

    dispatch({
        type: 'DELETE_NOTE',
        payload: id
    })
}

export const completeNote = (id) => async dispatch => {
    const notes = dbService.DBcompleteNote(id)

    dispatch({
        type: 'COMPLETE_NOTE',
        payload: notes
    })
}

export const getCategories = () => async dispatch => {

    const categories = dbService.getCategories()

    dispatch({
        type: 'GET_CATEGORIES',
        payload: categories
    })
}

export const getCategory = () => async dispatch => {

}