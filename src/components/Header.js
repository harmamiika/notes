import React from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './Header.css';

const useStyles = makeStyles((theme) => ({
  centeritems: {
    justifyContent: 'flex-center',
    alignItems: 'center',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  centeredButtons: {
    justifyContent: 'flex-center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            LocalStorageNotes by Miika
          </Typography>

          <Link to="/">
            <Button>
              <Typography variant="h6" className={classes.title}>
                Create Notes
              </Typography>
            </Button>
          </Link>

          <Link to="/categories">
            <Button>
              <Typography variant="h6" className={classes.title}>
                Categories
              </Typography>
            </Button>
          </Link>

          <Link to="/view">
            <Button>
              <Typography variant="h6" className={classes.title}>
                Note Archive
              </Typography>
            </Button>
          </Link>

          <Link to="/info">
            <Button>
              <Typography variant="h6" className={classes.title}>
                Info
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
