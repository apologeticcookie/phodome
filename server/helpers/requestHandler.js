var options = require('../config/options');
var nodeStatic = require('node-static'); // Why do we use this
var path = require('path');
var fileServer = new nodeStatic.Server(options.publicDir, options.nodeStatic); //  a static file server which serves provided as part of node
var UploadHandler = require('./uploadHandler');
const ArtController = require('../db/controllers/ArtController');
const http = require('http');

var express = require('express');
var router = express.Router();

// defines the image route Note :name is a parameter which matches to the file name
// stored in public/images

router.route('/images/:name')
.get( function(req, res) {
  console.log('You requested image ' + req.params.name + req.url);
  fileServer.serve(req, res);

});

// This url fetches all the images

router.route('/images')
.get( function(req, res) {
  console.log('in get /images You all requested image ' + req.params.name + req.url);
  var handler = new UploadHandler(req, res);
  handler.get();

});

// This URL is not functional yet (but there are provisions for ir) ,
// It was intended to load different VR views for different rooms

router.route('/rooms/:name')
.get( function(req, res) {
  console.log('In get /rooms/:name You all requested image ' + req.params.name + req.url + ' ' + req.params.name);
  var handler = new UploadHandler(req, res);
  handler.get();

});


router.route('/images')
.post( function(req, res) {
  console.log('In Post /images You posted image ' + req.url);
  var handler = new UploadHandler(req, res);
  handler.post();

});

router.route('/arts')
.get(function (req, res) {
  console.log('In get /arts, you requested a random piece of art');
  ArtController.getRandomArt(function(art) {
    res.send(200, art);
  });
});

router.route('/arts/:id')
.get(function(req, res) {
  console.log('In get /arts, you requested art with id:' + req.params.id);
  ArtController.getArt(req.params.id, function(art) {
    if (art) {
      res.send(200, art);
    } else {
      res.send(404);
    }
  });
});

router.route('/arts/related/:id')
.get(function(req, res) {
  console.log('In get /arts/related, you requested art related to id:' + req.params.id);
  ArtController.getRelatedArts(req.params.id, function(arts) {
    if (arts) {
      res.send(200, arts);
    } else {
      res.send(404);
    }
  });
});

router.route('/get/:id')
  .get(function (req, res) {
    var src = req.params.id;
    while (src.indexOf('SLASH') >= 0) {
      src = src.replace('SLASH', '/');
    }

    const options = {
      url: src,
      headers: {
        'Content-Type': 'image/jpeg'
      }
    };
    http.get(src, function(httpResponse) {
      var body = '';
      httpResponse.setEncoding('binary');
      httpResponse.on('data', function(chunk) {
        body += chunk;
      });
      httpResponse.on('end', function() {
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': httpResponse.headers['content-length']
        });
        res.end(body, 'binary');
      });
    });
  });
module.exports.router = router;
