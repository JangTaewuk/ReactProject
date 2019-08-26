import React from 'react';
import TextDisplayer from './components/TextDisplayer';
import TextChangeButton from './components/TextChangeButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

function App() {
  return (
    <div>
       <AppBar color="primary" position="static">
       <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
          </Toolbar>
        </AppBar>
      <TextDisplayer></TextDisplayer>
      <TextChangeButton></TextChangeButton>
    </div>
  );
}

export default App;
