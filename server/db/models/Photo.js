var db = require('../db');
var Sequelize = require('sequelize');

var Photo = db.define('photo', {
  imageId: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  }
});

module.exports = Photo;
