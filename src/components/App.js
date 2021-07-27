import React from 'react'

import AddNote from './AddNote'
import Container from '@material-ui/core/Container'

const App = () => {
    return (
        <div>
            <Container style={{ backgroundColor: "white" }}>
                <AddNote />
            </Container>
        </div>
    )
}

export default App