import React from 'react';

import {
  deepPurple700, //#512DA8
  deepPurple500, //#673AB7
  deepPurple100, //#D1C4E9
  blueGrey500, //#607D8B
  fullWhite, //#FFFFFF
  grey900, //#212121
  grey600, //#757575
  grey400, //#BDBDBD
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

const themeStyles = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: fullWhite, //#FFFFFF
    primary2Color: fade(grey900, 0.7), //#212121
    primary3Color: grey600, //#757575
    accent1Color: blueGrey500, //#607D8B
    accent2Color: blueGrey500, //#607D8B
    accent3Color: blueGrey500, //#607D8B
    textColor: deepPurple100, //#D1C4E9
    secondaryTextColor: deepPurple500, //#673AB7
    alternateTextColor: deepPurple700, //#512DA8
    canvasColor: fullWhite, //#757575
    borderColor: fade(fullWhite, 0.3), //#FFFFFF
    disabledColor: fade(grey400, 0.3), //#BDBDBD
    pickerHeaderColor: fade(grey400, 0.12), //#BDBDBD
    clockCircleColor: fade(grey400, 0.12), //#BDBDBD
  },
};

//https://www.materialpalette.com/deep-purple/blue-grey
/* INVERSE COLOR SCHEME */
// primary1Color: deepPurple700, //#512DA8
// primary2Color: deepPurple500, //#673AB7
// primary3Color: deepPurple100, //#D1C4E9
// accent1Color: blueGrey500, //#607D8B
// accent2Color: blueGrey500, //#607D8B
// accent3Color: blueGrey500, //#607D8B
// textColor: fullWhite, //#FFFFFF
// secondaryTextColor: fade(grey900, 0.7), //#212121
// alternateTextColor: grey600, //#757575
// canvasColor: grey600, //#757575
// borderColor: fade(grey400, 0.3), //#BDBDBD
// disabledColor: fade(grey400, 0.3), //#BDBDBD
// pickerHeaderColor: fade(grey400, 0.12), //#BDBDBD
// clockCircleColor: fade(grey400, 0.12), //#BDBDBD

const muiTheme = getMuiTheme(themeStyles);

const HomePage = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        iconElementRight={
          <IconButton 
            iconClassName='muidocs-icon-custom-github' 
            href='https://github.com/apologeticcookie/apologeticcookie' />}
      />
      <h1>Phodome</h1>
      <p>See your photos around you, truly.</p>
      <RaisedButton label='Demo' />
    </div>
  </MuiThemeProvider>
);

export default HomePage