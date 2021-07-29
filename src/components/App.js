import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './Header'
import AddNote from './AddNote'
import NoteList from './NoteList'

const App = () => {
    return (
        <div>
            <Header />
            <Container style={{ backgroundColor: "white" }}>
                <AddNote />
                <NoteList />
            </Container>
        </div>
    )
}

export default App