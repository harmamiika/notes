import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { notesReducer } from './reducers/notesReducer'

const reducers = combineReducers({
    notes: notesReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

store.subscribe(() => console.log(store.getState()))

export default store