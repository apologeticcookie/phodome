var express = require('express');
var app = express();
var db = require('./server/db/db');
var Photo = require('./server/db/models/Photo');

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});

// Sample Sequelize code for integrating into api calls

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