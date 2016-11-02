var request = require('request');

request.get('http://www.metmuseum.org/art/collection/search/12232', function(error, response, body) {
  const indexOfA = body.indexOf('#collectionImage');
  body = body.slice(indexOfA);
  const indexOfUrl = body.indexOf('ng-src=');
  const parIndexes = [];
  for (var i = indexOfUrl + 6; parIndexes.length < 2; i++ ) {
    if (body[i] === '(' || body[i] === ')') {
      parIndexes.push(i);
    }
  }
  const url = body.slice(parIndexes[0] + 2, parIndexes[1] - 1);
  debugger;
});