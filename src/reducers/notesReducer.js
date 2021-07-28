export const notesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat(action.payload)
        default:
            return state
    }
}