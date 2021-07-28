import React from 'react'
import Container from '@material-ui/core/Container'

import AddNote from './AddNote'
import NoteList from './NoteList'

const App = () => {
    return (
        <div>
            <Container style={{ backgroundColor: "white" }}>
                <AddNote />
                <NoteList />
            </Container>
        </div>
    )
}

export default App