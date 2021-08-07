import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { notesReducer } from './reducers/notesReducer'
import { categoriesReducer } from './reducers/categoriesReducer'

const reducers = combineReducers({
    notes: notesReducer,
    categories: categoriesReducer,
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

store.subscribe(() => console.log(store.getState()))

export default store