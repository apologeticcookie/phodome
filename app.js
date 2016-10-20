// Express Server
var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('This marks the beginning of Phodome');
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});

// Database set up
// Ref: http://docs.sequelizejs.com/en/latest/docs/getting-started/
// Ref on localhost URI: http://stackoverflow.com/questions/3582552/postgres-connection-url
// Notes to set up local database:
// a) Download Postgres App from http://postgresapp.com/
// b) Start local database from the Desktop app
// c) start server using 'node app.js'
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://localhost');

var Photo = sequelize.define('photo', {
  imageId: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Photo.sync({force: true}).then(function () {
  return Photo.create({
    imageId: 'shaka.jpg',
    comment: 'Whatddup'
  });
});

Photo.findAll().then(function(photos) {
  console.log(photos);
});