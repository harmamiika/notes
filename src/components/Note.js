import React from 'react'

import { ListItem, Divider, ListItemText } from '@material-ui/core'
import { ClearIcon } from '@material-ui/icons/Clear'

const Note = ({ note }) => {
    return (
        <div>
            <ListItem>
                <ListItemText primary={note} />
            </ListItem>
            <Divider />
        </div>
    )
}

export default Note