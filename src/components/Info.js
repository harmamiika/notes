import React from 'react';
import { Helmet } from 'react-helmet';

import './Info.css';

import { Typography } from '@material-ui/core';

const Info = () => {
  return (
    <div>
      <Helmet>
        <title>Info | LocalStorageNotes</title>
      </Helmet>
      <Typography variant="h2" component="h1">
        LocalStorageTodos by Miika
      </Typography>
      <Typography variant="p" component="p">
        Todo app with smooth user experience
      </Typography>
      <Typography variant="p" component="p">
        - No login
      </Typography>
      <Typography variant="p" component="p">
        - Notes stored in localstorage
      </Typography>
      <Typography variant="p" component="p">
        - Create Note -form smooth use with autofocus and submitting on
        enter-key press
      </Typography>
      <Typography variant="h3" component="h3">
        Technology
      </Typography>
      <Typography variant="p" component="p">
        - React, functional components
      </Typography>
      <Typography variant="p" component="p">
        - Redux, useSelector and useDispatch API
      </Typography>
      <Typography variant="p" component="p">
        - Material UI
      </Typography>
      <Typography variant="p" component="p">
        - React Helmet
      </Typography>
    </div>
  );
};

export default Info;
