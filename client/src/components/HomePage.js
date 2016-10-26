import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const HomePage = props => (
  <MuiThemeProvider>
    <div>
      <AppBar
        iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />}
      />
      <header>Phodome</header>
      <IconButton iconClassName="muidocs-icon-custom-github" />
      <a onClick={props.toggleDemo}>My Photos</a> 
    </div>
  </MuiThemeProvider>
);

export default HomePage