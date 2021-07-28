export const addNote = (note) => async dispatch => {
    dispatch({
        type: 'ADD_NOTE',
        payload: note
    })
}