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
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pass@example.com:5432/dbname');

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll().then(function(users) {
  console.log(users);
})