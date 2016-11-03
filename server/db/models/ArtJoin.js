var db = require('../db');
var Sequelize = require('sequelize');

var ArtJoin = db.define('artjoin', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id1: {
    type: Sequelize.INTEGER,
  },
  id2: {
    type: Sequelize.INTEGER
  }
});

ArtJoin.sync();

module.exports = ArtJoin;
