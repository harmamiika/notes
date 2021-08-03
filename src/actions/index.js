import dbService from '../services/localStorageDB'

export const addNote = (note) => async dispatch => {
    const noteDB = dbService.addNote(note)

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
    dispatch({
        type: 'DELETE_NOTE',
        payload: id
    })
}

export const completeNote = (id) => async dispatch => {
    dispatch({
        type: 'COMPLETE_NOTE',
        payload: id
    })
}

