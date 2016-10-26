var options = require('../config/options');
var nodeStatic = require('node-static'); // Why do we use this
var path = require('path');
var fileServer = new nodeStatic.Server(options.publicDir, options.nodeStatic); //  a static file server which serves provided as part of node 
var UploadHandler = require('./uploadHandler');

var express = require('express');
var router = express.Router();

router.route('/images/:name')
.get( function(req, res) {
  console.log('You requested image ' + req.params.name + req.url);
  fileServer.serve(req, res);
  
}); 

router.route('/images')
.get( function(req, res) {
  console.log('in get /images You all requested image ' + req.params.name + req.url);
  var handler = new UploadHandler(req, res);
  handler.get();
  
}); 

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

module.exports.router = router;