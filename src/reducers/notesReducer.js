export const notesReducer = (state = [], action) => {
    console.log(state, 'state')
    console.log(action, 'action')

    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat(action.payload)
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.payload)
        default:
            return state
    }
}