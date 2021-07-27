import React from 'react'
import TextField from '@material-ui/core/TextField';

const AddNote = () => {
    return (
        <div>
            <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Add note"
                multiline
                rows={7}
                defaultValue="Default Value"
                variant="outlined"
            />
        </div>
    )
}

export default AddNote