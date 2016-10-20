require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;

var React = require('react');
var chai = require('chai');
var sinon = require('sinon');
var enzyme = require('enzyme');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

global.React = React;
global.expect = chai.expect;
global.spy = sinon.spy;
global.mount = enzyme.mount;
global.shallow = enzyme.shallow;
global.render = enzyme.render;