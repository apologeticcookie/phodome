var options = require('../config/options');
var fs = require('fs');
var path = require('path');
var _existsSync = fs.existsSync || path.existsSync;


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
    Object.keys(options.imageVersions).forEach(function (version) {

      if (_existsSync(
          options.uploadDir + '/' + version + '/' + that.name
          )) {
        console.log('Version ', version);
        that[version + 'Url'] = baseUrl + version + '/' +
                encodeURIComponent(that.name);
      }
    });
  }
};


module.exports = exports = FileInfo;
