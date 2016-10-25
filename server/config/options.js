var path = require('path');
var basePath = path.resolve(__dirname, '..');

module.exports = {
  tmpDir: basePath + '/tmp',
  publicDir: basePath + '/public',
  uploadDir: basePath + '/public/images',
  uploadUrl: '/api/images/',
  minFileSize: 1,
  maxFileSize: 10485760, // 10MB
  maxPostSize: 10485760, // 10MB
  acceptFileTypes: /.+/i,
  imageTypes: /\.(gif|jpe?g|png|bmp|swf)$/i,
  imageVersions: {
    'thumbnails': {
      width: 80,
      height: 80
    }
  },
  
  nodeStatic: {
    cache: 3600
  }
};
