import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Container from '@material-ui/core/Container'

import Header from './Header'
import AddNote from './AddNote'
import NoteList from './NoteList'

import { getNotes } from '../actions'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotes())
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <AddNote />
                <NoteList />
            </Container>
        </div>
    )
}

// all notes
// next notes

export default App

// data struckture ei useria koska localstorage db 

// set and get notes
// notes key=id(generated) { noteContent() createonDate() completed() }