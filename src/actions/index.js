export const addNote = (note) => async dispatch => {
    dispatch({
        type: 'ADD_NOTE',
        payload: note
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