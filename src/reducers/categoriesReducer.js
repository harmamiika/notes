export const categoriesReducer = (state = [], action) => {
    console.log(state, 'state')
    console.log(action, 'action')


    switch (action.type) {
        case 'GET_CATEGORIES':
            return state.concat(action.payload)
        default:
            return state
    }
}