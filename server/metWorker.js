const request = require('request');
const ArtController = require('./db/controllers/ArtController');

const findBetween = function findBetween(iString, firstChar, lastChar) {
  const indexes = [];
  for (var i = 0; indexes.length < 2 && i < iString.length; i++) {
    if (iString[i] === firstChar && indexes.length === 0) {
      indexes.push(i);
    } else if (iString[i] === lastChar && indexes.length === 1) {
      indexes.push(i);
    }
  }
  if (indexes.length === 2) {
    return iString.slice(indexes[0] + 1, indexes[1]);
  }
  return null;
};

const cutBefore = function cutBefore(iString, cutString) {
  const index = iString.indexOf(cutString);
  if (index !== -1) {
    return iString.slice(index);
  } else {
    return null;
  }
};

const addArt = function addArt(id) {

  request.get('http://www.metmuseum.org/art/collection/search/' + id, function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }

    const art = {id: id, related: []};
    body = cutBefore(body, '#collectionImage');
    if (body === null) { //if there is no #collectionImage, then this item doesn't exist
      return;
    }
    body = cutBefore(body, 'ng-src=');
    art.smallUrl = findBetween(body, '\'', '\'');

    body = cutBefore(body, 'utility-menu__item utility-menu__item--download');
    if (body === null) { //if there is no download button, this image doesn't have a picture
      return;
    }
    body = cutBefore(body, '&#039');
    art.url = findBetween(body, ';', '&');
    
    body = cutBefore(body, 'collection-details__object-title');
    art.title = findBetween(body, '>', '<');

    while (cutBefore(body, 'collection-details__tombstone--label') !== null) {
      body = cutBefore(body, 'collection-details__tombstone--label');
      const key = findBetween(body, '>', ':');
      body = cutBefore(body, 'collection-details__tombstone--value');
      const value = findBetween(body, '>', '<');
      art[key] = value; 
    }

    while (cutBefore(body, 'card__standard-image') !== null) {
      body = cutBefore(body, 'card__standard-image');
      body = cutBefore(body, 'href');
      const id = findBetween(body, '"', '"');
      const indexOfId = id.indexOf('search/') + 7;
      art.related.push(Number(id.slice(indexOfId)));
    }

     
    ArtController.insertArt(art);
  });
};

const addAll = function(idArray) {
  const length = idArray.length;
  const requestsPerTick = 10;
  const period = 3000;
  var i = 0;
  var j = i;

  var tick = setInterval(function() {
    j += requestsPerTick;
    for (i = i; i < j && i < length; i++) {
      addArt(idArray[i]);
    }
    if (i >= length) {
      clearInterval(tick);
    }
  }, period);
};

const startingId = 500;
const endingId = 600;
const requestsPerTick = 10;
const period = 3000;

var i = startingId;
var j = i;

const grabNew = false;
//Grab new 
if (grabNew) {
  var tick = setInterval(function() {
    console.log(`Fetching ${i} until ${endingId}`);
    j += requestsPerTick;
    for (i = i; i < j && i < endingId; i++) {
      addArt(i);
    }
    if (i >= endingId) {
      clearInterval(tick);
    }
  }, period);
}

//Grab related of all in DB
if (!grabNew) {
  ArtController.initArts(function(availableArtIds, requiredArtIds) {
    const idsToRequest = [];
    requiredArtIds.forEach(function(id) {
      if (!availableArtIds.includes(id)) {
        idsToRequest.push(id);
      }
    });
    addAll(idsToRequest);
  });
}