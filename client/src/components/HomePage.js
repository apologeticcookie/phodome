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
import getDomePositions from '../util/sphereMath';

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

const muiTheme = getMuiTheme(themeStyles);

const positions = getDomePositions(250, 1);

const plotlyConfig = {

    // no interactivity, for export or image generation
    staticPlot: false,

    // we can edit titles, move annotations, etc
    editable: false,

    // plot will respect layout.autosize=true and infer its container size
    autosizable: true,

    // if we DO autosize, do we fill the container or the screen?
    fillFrame: true,

    // if we DO autosize, set the frame margins in percents of plot size
    frameMargins: true,

    // mousewheel or two-finger scroll zooms the plot
    scrollZoom: true,

    // double click interaction (false, 'reset', 'autosize' or 'reset+autosize')
    doubleClick: 'reset+autosize',

    // new users see some hints about interactivity
    showTips: false,

    // link to open this plot in plotly
    showLink: false,

    // if we show a link, does it contain data or just link to a plotly file?
    sendData: false,

    // text appearing in the sendData link
    linkText: '',

    // false or function adding source(s) to linkText <text>
    showSources: false,

    // display the mode bar (true, false, or 'hover')
    displayModeBar: false,

    // remove mode bar button by name
    // (see ./components/modebar/buttons.js for the list of names)
    modeBarButtonsToRemove: [],

    // add mode bar button using config objects
    // (see ./components/modebar/buttons.js for list of arguments)
    modeBarButtonsToAdd: [],

    // fully custom mode bar buttons as nested array,
    // where the outer arrays represents button groups, and
    // the inner arrays have buttons config objects or names of default buttons
    // (see ./components/modebar/buttons.js for more info)
    modeBarButtons: false,

    // add the plotly logo on the end of the mode bar
    displaylogo: false,

    // URL to topojson files used in geo charts
    topojsonURL: 'https://cdn.plot.ly/',

    // Turn all console logging on or off (errors will be thrown)
    // This should ONLY be set via Plotly.setPlotConfig
    logging: true,
};

let xPos = [];
let yPos = [];
let zPos = [];

positions.forEach((point) => {
  xPos.push(point[0]);
  yPos.push(point[1]);
  zPos.push(point[2]);
});

const photos = {
  x: xPos, y: yPos, z: zPos,
  mode: 'markers',
  marker: {
    color: 'rgb(81, 45, 168)',
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    symbol: 'square',
    opacity: 0.8},
  type: 'scatter3d'
};

const person = {
  x: [0], y: [0], z: [0.1],
  mode: 'markers',
  marker: {
    color: 'rgb(179,157,219)',
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    symbol: 'diamond',
    opacity: 0.8},
  type: 'scatter3d'
};

const axisTemplate = {
  showticklabels: false,
  title: ''
};

const data = [photos, person];
const layout = {
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
  },
  scene: {
    xaxis: axisTemplate,
    yaxis: axisTemplate,
    zaxis: axisTemplate
  },
  showlegend: false  
};

const HomePage = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        iconElementRight={
          <IconButton 
            iconClassName='muidocs-icon-custom-github' 
            href='https://github.com/apologeticcookie/apologeticcookie' />}
      />
      <div id='homepage'>
        <h1>Phodome</h1>
        <p>See your photos around you, truly.</p>
        <RaisedButton label='Demo' onClick={props.toggleDemo} />
      </div>
      <div id='domeViz' ></div>
    </div>
  </MuiThemeProvider>
);

export default HomePage