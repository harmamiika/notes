import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'

import Header from './Header'
import AddNote from './AddNote'
import NoteList from './NoteList'
import Info from './Info'
import ViewNotes from './ViewNotes'

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
                <Switch>

                    <Route path='/info'>
                        <Info />
                    </Route>

                    <Route path='/view'>
                        <ViewNotes />
                        <NoteList completed={true} />
                    </Route>

                    <Route path='/'>
                        <AddNote />
                        <NoteList completed={false} />
                    </Route>

                </Switch>
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