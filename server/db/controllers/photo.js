var photoModel = require('../models/Photo');
var urlModel = require('../models/URL');

module.exports = {

  insertPhoto: function(photoObj) {

    urlModel.findOrCreate({where: {name: 'guest'}})
		.spread(function(user, created) {
      
  photoObj.id_url = user.get('id');
  photoModel.findOrCreate({where: {name: photoObj.name, type: photoObj.type, location: photoObj.url, id_url: photoObj.id_url}})
  .spread(function(photo, created) {

  });
});
    

  }


};