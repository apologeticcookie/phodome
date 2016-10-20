var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('This marks the beginning of Phodome');
});

app.listen(process.env.PORT || 9999, function() {
  console.log(`listening on port ${process.env.PORT || 9999}`);
});