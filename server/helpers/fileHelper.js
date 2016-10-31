var options = require('../config/options');
var fs = require('fs');
var path = require('path');
var _existsSync = fs.existsSync || path.existsSync;

/*
This helper file constructs the FileInfo object with information about the uploaded file
Initiates the url for File Location.
Validates if the file size falls with the size limit
the baseUrl field identifies maps to a particular image which can be fetched with a get request
TODO: server sometimes crashes when  upload is more than 1 MB should look in to it

*/

var FileInfo = function(file) {
  this.name = file.name;
  this.size = file.size;
  this.type = file.type;
  this.deleteType = 'DELETE';
};

FileInfo.prototype.initUrl = function (req) {
  if (!this.error) {
    var that = this;
    var baseUrl = (options.ssl ? 'https:' : 'http:') +
          '//' + req.headers.host + options.uploadUrl;
    this.url = this.deleteUrl = baseUrl + encodeURIComponent(this.name);
  }
};

FileInfo.prototype.validate = function () {
  if (options.minFileSize && options.minFileSize > this.size) {
    this.error = 'File is too small';
  }
  if (options.maxFileSize && options.maxFileSize < this.size) {
    this.error = 'File is too big';
  }
  if (!options.acceptFileTypes.test(this.type)) {
    this.error = 'File type not wrong';
  }

  return !this.error;
};



module.exports = exports = FileInfo;
