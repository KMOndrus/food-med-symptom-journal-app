import React from 'react';
import JournalContainer from './Containers/JournalContainer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {
  return (
    <React.Fragment>
      <AppBar id='journal-app-bar' position="static" color="default">
        <Toolbar>
          <Typography variant="h4">
            Food, Medication, and Symptom Journal
          </Typography>
        </Toolbar>
      </AppBar>
      <JournalContainer />
    </React.Fragment>
  );
};

export default App;
