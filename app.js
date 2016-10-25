var express = require('express');
var app = express();
var morgan = require('morgan'); // middleware for logging request details
var bodyParser = require('body-parser'); // middleware supports unicode encoding of the body
var compression = require('compression'); // middleware for gzip compression
var requestHandler = require('./server/helpers/requestHandler').router;

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(allowCrossDomain);
app.use(compression());
app.use('/api', requestHandler);

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});


module.exports = app;

// Creates a table named 'photos'
// force: true will drop the table if it already exists
// Photo.sync({force: true})
// .then(function() {
//   return Photo.create({
//     imageId: 'shaka.jpg',
//     comment: 'Whatddup'
//   });
// })
// .then(function() {
//   return Photo.findAll();
// })
// .then(function(photos) {
//   console.log(photos);
// });