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
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Subheader from 'material-ui/Subheader';

const themeStyles = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepPurple700, //#512DA8
    primary2Color: fade(grey900, 0.7), //#212121
    primary3Color: grey600, //#757575
    accent1Color: blueGrey500, //#607D8B
    accent2Color: blueGrey500, //#607D8B
    accent3Color: blueGrey500, //#607D8B
    textColor: fullWhite, //#FFFFFF
    secondaryTextColor: deepPurple500, //#673AB7
    alternateTextColor: blueGrey500, //#607D8B
    canvasColor: fullWhite, //#FFFFFF
    borderColor: fade(fullWhite, 0.3), //#FFFFFF
    disabledColor: fade(grey400, 0.3), //#BDBDBD
    pickerHeaderColor: fade(grey400, 0.12), //#BDBDBD
    clockCircleColor: fade(grey400, 0.12), //#BDBDBD
  },
};

//https://www.materialpalette.com/deep-purple/blue-grey

const muiTheme = getMuiTheme(themeStyles);

const iconStyle = {
  verticalAlign: 'middle',
  color: fullWhite
};

const buttonStyle = {
  textAlign: 'center',
};

const labelStyle = {
  verticalAlign: 'middle',
};

const HomePage = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        iconElementLeft={
              <IconMenu
                iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem primaryText="About" innerDivStyle={{color: 'black'}} />
                <MenuItem primaryText="Team" innerDivStyle={{color: 'black'}} />
                <MenuItem primaryText="Contact Us" innerDivStyle={{color: 'black'}} />
              </IconMenu>
        }
        iconElementRight={
          <IconButton 
            iconClassName='muidocs-icon-custom-github' 
            iconStyle={iconStyle}
            href='https://github.com/apologeticcookie/apologeticcookie' />}
      />
      <div className='homepage'>
        <h1>Phodome</h1>
        <p>See your photos around you, truly.</p>
        <RaisedButton label='Demo' onClick={props.toggleDemo} buttonStyle={buttonStyle} labelStyle={labelStyle} />
      </div>
      <div id='domeViz' ></div>
      <Subheader style={{color: grey900, textAlign: 'center', position: 'absolute', bottom: '5%'}} >An ApologeticCookie Creation :)</Subheader>

    </div>
  </MuiThemeProvider>
);

export default HomePage