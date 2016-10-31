var db = require('../db');
var Sequelize = require('sequelize');

// Photo Table holds photo details,
// In order to implement rooms feature this (id_url) should be a foreign key

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

Photo.sync();

module.exports = Photo;
