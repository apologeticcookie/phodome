/*
References:
https://www.cmu.edu/biolphys/deserno/pdf/sphere_equi.pdf
*/

// var Plotly = require('plotly.js');

var createPoint = function(r, theta, phi) {

  var x = r * Math.sin(theta) * Math.cos(phi);
  var y = r * Math.sin(theta) * Math.sin(phi);
  var z = r * Math.cos(theta);

  return [x, y, z];
};


// spherePositions function generates an array of arrays [x, y, z], each denoting a position
// on the surface of the sphere. Inputs N represents the number of desired points and r represents
// the desired radius of the sphere. The center of the sphere will be [0, 0, 0].
var spherePositions = function(N, r) {
  var positions = [];

  // algorithm approximates each position to occupy the same area of a sphere,
  // in a layout that places the positions in concentric horizontal circles.

  var nCount = 0;
  // divides area of a sphere by the number of points
  var a = 4 * Math.PI * Math.pow(r, 2) / N;
  // square roots the area to find height/width of each square
  var d = Math.pow(a, 0.5);

  // sets interval m0
  var m0 = Math.round(Math.PI / d);

  // splits 180 degrees by the number of intervals
  // assume vertical distance
  var d0 = Math.PI / m0;
  // divides area by vertical distance
  // to compute the horizontal distance
  var dP = a / d0;

  // generates positions by traversing through intervals
  for (var m = 0; m < m0; m++) {
    var theta = Math.PI * (m + 0.5) / m0;
    var mP = Math.round(2 * Math.PI * Math.sin(theta) / dP);
    for (var n = 0; n < mP; n++) {
      var phi = 2 * Math.PI * n / mP;
      positions.push(createPoint(r, theta, phi));
      nCount++;
    }
  }
  return positions;
};

// domePositions takes the first half positions
// and generates the positions in a dome
var domePositions = function(n, r) {
  return spherePositions(2 * n, r).slice(0, n);
};

// toggle to render sphere or dome
var number = 250;
// var testPositions = spherePositions(number, 1);
var testPositions = domePositions(number, 1);

// Plotly configurations
var plotlyConfig = {

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


$( document ).ready(function() {

  var xPos = [];
  var yPos = [];
  var zPos = [];

  testPositions.forEach((point) => {
    xPos.push(point[0]);
    yPos.push(point[1]);
    zPos.push(point[2]);
  });


  var photos = {
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

  var person = {
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

  var axisTemplate = {
    showticklabels: false,
    title: ''
  };

  var data = [photos, person];
  var layout = {
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

  Plotly.newPlot('myDiv', data, layout, plotlyConfig);

});
