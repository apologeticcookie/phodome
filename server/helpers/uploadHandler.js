var fs = require('fs');
var path = require('path');
var gm = require('gm');
var options = require('../config/options');
var formidable = require('formidable');
var FileInfo = require('./fileHelper');

var UploadHandler = function(req, res, callback) {
  this.req = req;
  this.res = res;
  this.callback = function(obj) {
    console.log('Response from CB ', obj);
    this.res.json(obj);
  };
};

/**
 * Get all upload files
 *
 */
UploadHandler.prototype.get = function () {
  var handler = this;
  var files = [];

  fs.readdir(options.uploadDir, function (err, list) {
    list.forEach(function (name) {
      var stats = fs.statSync(options.uploadDir + '/' + name);
      var fileInfo;
      if (stats.isFile() && name[0] !== '.') {
        fileInfo = new FileInfo({
          name: name,
          size: stats.size
        });
        fileInfo.initUrl(handler.req);
        files.push(fileInfo);
      }
    });
    handler.callback({files: files});
  });
};

module.exports = UploadHandler;