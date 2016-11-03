const Art = require('../models/Art');
const ArtJoin = require('../models/ArtJoin');

const availableArtIds = [];
var requiredArtIds = [];

module.exports = {
  getArt: function getArt(id, cb) {
    Art.findById(id)
    .then(function(art) {
      cb(art);
    })
    .catch(function(e) {
      console.error(e);
    });
  },

  insertArt: function insertArt(art) {
    art.related.forEach(function(id) {
      ArtJoin.create({id1: art.id, id2: id});
    });
    art.related = art.related.join(',');
    Art.create(art);
  },

  getRelatedArts: function getRelatedArts(art, cb) {
    ArtJoin.findAll({where: {id1: art.id}})
    .then(function(arts) {
      arts = arts.map(function(art) { return art.dataValues; });
      cb(arts);
    })
    .catch(function(e) {
      console.error(e);
    });
  },

  initArts: function initArts(cb) {
    Art.findAll({})
    .then(function(arts) {
      arts.forEach(function(art) {
        availableArtIds.push(art.dataValues.id);
        requiredArtIds = requiredArtIds.concat(art.dataValues.related.split(',')); 
      });
      if (cb) {
        cb(availableArtIds, requiredArtIds);
      }
    });
  },

  getRandomArt: function getRandomArt(cb) {
    if (availableArtIds === undefined) {
      this.initArts(function() { this.getRandomArt(cb); }.bind(this) );
      return;
    }
    const id = availableArtIds[Math.floor(Math.random() * availableArtIds.length)];
    this.getArt(id, cb);
  }
};