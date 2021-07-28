export const notesReducer = (state = [], action) => {
    console.log(state, 'state')
    console.log(action, 'action')

    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat(action.payload)
        default:
            return state
    }
}