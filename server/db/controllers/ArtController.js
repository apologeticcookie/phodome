const Art = require('../models/Art');
const ArtJoin = require('../models/ArtJoin');

var availableArtIds = [];
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
    Art.create(art)
    .catch(function(e) {
      console.error(e);
    });
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
    availableArtIds = [];
    requiredArtIds = [];

    ArtJoin.findAll({})
    .then(function(arts) {
      arts.forEach(function(art) {
        availableArtIds.push(art.dataValues.id1);
        var added = [];
        availableArtIds = availableArtIds.filter(function(id) {
          if (!added.includes(id)) {
            added.push(id);
            return true;
          }
          return false;
        });

        requiredArtIds.push(art.dataValues.id2);
        added = [];
        availableArtIds = availableArtIds.filter(function(id) {
          if (!added.includes(id) && !availableArtIds.includes(id)) {
            added.push(id);
            return true;
          }
          return false;
        }); 
      });
      if (cb) {
        cb(availableArtIds, requiredArtIds);
      }
    });
  },

  getRandomArt: function getRandomArt(cb) {
    this.initArts(function(availableArtIds, requiredArtIds) {
      const id = availableArtIds[Math.floor(Math.random() * availableArtIds.length)];
      this.getArt(id, cb);
    }.bind(this) );
  }
};