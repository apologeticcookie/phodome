var db = require('../db');
var Sequelize = require('sequelize');

var URL = db.define('url', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  }
});

module.exports = URL;
