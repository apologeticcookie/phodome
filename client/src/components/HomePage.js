import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12
};

const HomePage = props => (
  <MuiThemeProvider>
    <div>
      <AppBar
        iconElementRight={
          <IconButton 
            iconClassName='muidocs-icon-custom-github' 
            href='https://github.com/apologeticcookie/apologeticcookie' />}
      />
      <h1>Phodome</h1>
      <p>See your photos around you, truly.</p>
      <RaisedButton label="Demo" style={buttonStyle} />
    </div>
  </MuiThemeProvider>
);

export default HomePage