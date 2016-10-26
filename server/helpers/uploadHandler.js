var fs = require('fs');
var path = require('path');
var gm = require('gm');
var options = require('../config/options');
var formidable = require('formidable');
var FileInfo = require('./fileHelper');
var photoController = require('../db/controllers/photo');

var UploadHandler = function(req, res, callback) {
  this.req = req;
  this.res = res;
  this.callback = function(obj) {
    // console.log('Response from CB ', obj);
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

/**
*  Below source code is inspired from the live server implementation
**/


UploadHandler.prototype.post = function () {
  var handler = this;
  var form = new formidable.IncomingForm();
  var tmpFiles = [];
  var map = {};
  var files = [];
  var counter = 1;
  var redirect;
  var finish = function (err) {
    if (err) {
      console.log('Error thrown on finish ', err);
    }
    counter -= 1;
    if (!counter) {
      files.forEach(function (fileInfo) {
        fileInfo.initUrl(handler.req);
      });
      photoController.insertPhoto(files[0]);
      handler.callback({files: files}, redirect);
    }
  };

  form.uploadDir = options.tmpDir;
  form.on('fileBegin', function (name, file) { 
    console.log('On file Begin ');
    tmpFiles.push(file.path);
    var fileInfo = new FileInfo(file, handler.req, true);
    map[path.basename(file.path)] = fileInfo;
    files.push(fileInfo);
  })
  .on('file', function (name, file) {
    var fileInfo = map[path.basename(file.path)];
    fileInfo.size = file.size;
    if (!fileInfo.validate()) {
      console.log('File Invalid ', fileInfo.validate());
      fs.unlink(file.path);
      return;
    }
    console.log('Before renaming ', file.path, ' ', options.uploadDir + '/' + fileInfo.name);
    fs.renameSync(file.path, options.uploadDir + '/' + fileInfo.name); // do we need the rename code below
  }).on('aborted', function () {
    tmpFiles.forEach(function (file) {
      console.log('File aborted ', file);
      fs.unlink(file);
    });
  }).on('progress', function (bytesReceived) {
    console.log('File in progress ', bytesReceived);
    if (bytesReceived > options.maxPostSize) {
      handler.req.socket.destroy();
    }
  }).on('error', function (e) {
    console.log('On error ', handler.req);
    console.log('On error ', e);
  }).on('end', finish).parse(handler.req);
};

module.exports = UploadHandler;