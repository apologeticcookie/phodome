// Mocha will make these available as globals to all tests
// which prevents us from having to manually require common modules
// within each test file
global.expect = require('chai').expect;
global.request = require('request');
