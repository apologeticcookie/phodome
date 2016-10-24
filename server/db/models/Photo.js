var db = require('../db');
var Sequelize = require('sequelize');

var Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  location: {
  	type:Sequelize.STRING
  },
  type: {
  	type:Sequelize.STRING
  },
  id_url: {
  	type:Sequelize.INTEGER
  }
});

module.exports = Photo;
