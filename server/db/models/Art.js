var db = require('../db');
var Sequelize = require('sequelize');

var Art = db.define('art', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  'Accession Number': {
    type: Sequelize.STRING
  },
  Classification: {
    type: Sequelize.STRING
  },
  'Credit Line': {
    type: Sequelize.STRING
  },
  Culture: {
    type: Sequelize.STRING
  },
  Date: {
    type: Sequelize.STRING
  },
  Dimensions: {
    type: Sequelize.STRING
  },
  Geography: {
    type: Sequelize.STRING
  },
  Medium: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  smallUrl: {
    type: Sequelize.STRING
  },
  Designer: {
    type: Sequelize.STRING
  },
  Manufacturer: {
    type: Sequelize.STRING
  },
  Artist: {
    type: Sequelize.STRING
  },
  Maker: {
    type: Sequelize.STRING
  },
  related: {
    type: Sequelize.STRING
  }
});

Art.sync();

module.exports = Art;
