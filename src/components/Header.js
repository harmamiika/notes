import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    Notes App by Miika
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    Create Notes
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    NoteArchive - completed notes
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    Info
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header