// Express Server
var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('This marks the beginning of Phodome');
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});


// PostgreSQL Database
var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres!');

  /* Comment out select statement for now */
  // client
  //   .query('SELECT table_schema,table_name FROM information_schema.tables;')
  //   .on('row', function(row) {
  //     console.log(JSON.stringify(row));
  //   });
});