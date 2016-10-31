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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

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

const profileIconStyle = {
  verticalAlign: 'bottom',
  color: 'black'
};

const buttonStyle = {
  textAlign: 'center',
};

const labelStyle = {
  verticalAlign: 'middle',
};


class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      openAbout: false,
      openTeam: true
    };

    this.handleOpenAbout = this.handleOpenAbout.bind(this);
    this.handleCloseAbout = this.handleCloseAbout.bind(this);
    this.handleOpenTeam = this.handleOpenTeam.bind(this);
    this.handleCloseTeam = this.handleCloseTeam.bind(this);
  }

  handleOpenAbout() {
    this.setState({openAbout: true});
  }

  handleCloseAbout() {
    this.setState({openAbout: false});
  }

  handleOpenTeam() {
    this.setState({openTeam: true});
  }

  handleCloseTeam() {
    this.setState({openTeam: false});
  }

  render() {

    const actionsAbout = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleCloseAbout}
      />
    ];

    const actionsTeam = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleCloseTeam}
      />
    ];

    const aboutDialog = 
        <Dialog
          title="About"
          actions={actionsAbout}
          modal={false}
          open={this.state.openAbout}
          onRequestClose={this.handleCloseAbout}

          titleStyle={{color: 'black'}}
          bodyStyle={{color: 'black'}}
        >
          Phodome allows users to view and upload photos in a virtual reality style environment. The user will be able to share photos that they would like to share to their personal profile page. Friends will be able to view their page and see all of the pictures that they have posted.
        </Dialog>;

    const teamDialog = 
        <Dialog
          title="Team ApologeticCookie"
          actions={actionsTeam}
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.openTeam}
          onRequestClose={this.handleCloseTeam}

          titleStyle={{color: 'black'}}
          bodyStyle={{color: 'black'}}
        >
          <Avatar
            src="/assets/profilepics/joneleiottmoose.png"
            size={50}
          />
          <strong>Jon Eleiott</strong>&nbsp;<IconButton
            iconClassName="muidocs-icon-custom-github"
            iconStyle={profileIconStyle}
            href='https://github.com/JonathanEleiott' />
          <p>Jonathan Eleiott was a Canadian singer-songwriter. By the age of 15, he had appeared on stage with Shania Twain; by 16, he had signed a two-album recording contract with Arista Records. He wrote many songs that were sung by other artists including Complicated, Bad Girl, and Sk8er Boi.</p>
 
          <Avatar
            src="/assets/profilepics/jonoksas.png"
            size={50}
          />
          <strong>John Oksasoglu</strong>&nbsp;<IconButton
            iconClassName="muidocs-icon-custom-github"
            iconStyle={profileIconStyle}
            href='https://github.com/oksas' />
          <p>John Oksasoglu is an English Actor. Oksasoglu trained at the National Youth Theatre and graduated from the Guildhall School of Music and Drama in 1991, before beginning his career on stage. Cast as the fictional British secret agent James Bond in October 2005, his first film in the role, Casino Royale, was released internationally in November 2006.</p>
          
          <Avatar
            src="/assets/profilepics/riyaz.png"
            size={50}
          />
          <strong>Riyaz Ahmed</strong>&nbsp;<IconButton
            iconClassName="muidocs-icon-custom-github"
            iconStyle={profileIconStyle}
            href='https://github.com/riyazgithub' />
          <p>Riyaz has often been referred to as the most popular film actor in South India by the media and audiences. His popularity has been attributed to "his uniquely styled dialogues and idiosyncrasies in films. Riyaz's popularity as coming from his larger-than-life super-hero appearance in many films, supported by gravity-defying stunts and charismatic expressions, all while attempting to maintain modesty in real-life</p>

          <Avatar
              src="/assets/profilepics/tony.png"
              size={50}
          />
          <strong>Tony Tan</strong>&nbsp;<IconButton
            iconClassName="muidocs-icon-custom-github"
            iconStyle={profileIconStyle}
            href='https://github.com/tankwan' />
          <p>Tony Tan is a retired Scottish actor and producer who has won an Academy Award, two BAFTA Awards (one of them being a BAFTA Academy Fellowship Award) and three Golden Globes (including the Cecil B. DeMille Award and a Henrietta Award). He was knighted by Elizabeth II in July 2000 after receiving Kennedy Center Honors in the US in 1999.</p>
        
        </Dialog>;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            iconElementLeft={
                  <IconMenu
                    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  >
                    <MenuItem primaryText="About" innerDivStyle={{color: 'black'}} onClick={this.handleOpenAbout} />
                    <MenuItem primaryText="Team" innerDivStyle={{color: 'black'}} onClick={this.handleOpenTeam} />
                  </IconMenu>
            }
            iconElementRight={
              <IconButton
                iconClassName="muidocs-icon-custom-github"
                iconStyle={iconStyle}
                href='https://github.com/apologeticcookie/apologeticcookie' />}
          />
          <div className="homepage">
            <h1>Phodome</h1>
            <p>See your photos around you, truly.</p>
            <RaisedButton label="Demo" onClick={this.props.toggleDemo} buttonStyle={buttonStyle} labelStyle={labelStyle} />
          </div>
          <div id="domeViz"></div>
          <img className="dome-viz-img" src="/assets/dome-viz.png" />
          <Subheader style={{color: grey900, textAlign: 'center', position: 'absolute', bottom: '5%'}} >An ApologeticCookie Creation :)</Subheader>
          {aboutDialog}
          {teamDialog}
        </div>
      </MuiThemeProvider>
    );
  }
}

HomePage.propTypes = {
  toggleDemo: React.PropTypes.func.isRequired
};

export default HomePage;
