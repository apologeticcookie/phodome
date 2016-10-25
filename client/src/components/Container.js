import React from 'react';
import PhodomeScene from './PhodomeScene';
import Sidebar from './Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// This allows our sidebar and phodomeScene on the same screen
const Container = () => (
  <MuiThemeProvider>  
    <div>
      <Sidebar />
      <PhodomeScene />
    </div>
  </MuiThemeProvider>
);

export default Container;