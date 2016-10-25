
var createPoint = function(r, theta, phi) {

  var x = r * Math.sin(theta) * Math.cos(phi);
  var y = r * Math.sin(theta) * Math.sin(phi);
  var z = r * Math.cos(theta);

  return [x, y, z];
};


// spherePositions function generates an array of arrays [x, y, z], each denoting a position
// on the surface of the sphere. Inputs N represents the number of desired points and r represents
// the desired radius of the sphere. The center of the sphere will be [0, 0, 0].
var spherePositions = function(N, r) {
  var positions = [];

  // algorithm approximates each position to occupy the same area of a sphere,
  // in a layout that places the positions in concentric horizontal circles.

  var nCount = 0;
  // divides area of a sphere by the number of points
  var a = 4 * Math.PI * Math.pow(r, 2) / N;
  // square roots the area to find height/width of each square
  var d = Math.pow(a, 0.5);

  // sets interval m0
  var m0 = Math.round(Math.PI / d);

  // splits 180 degrees by the number of intervals
  // assume vertical distance
  var d0 = Math.PI / m0;
  // divides area by vertical distance
  // to compute the horizontal distance
  var dP = a / d0;

  // generates positions by traversing through intervals
  for (var m = 0; m < m0; m++) {
    var theta = Math.PI * (m + 0.5) / m0;
    var mP = Math.round(2 * Math.PI * Math.sin(theta) / dP);
    for (var n = 0; n < mP; n++) {
      var phi = 2 * Math.PI * n / mP;
      positions.push(createPoint(r, theta, phi));
      nCount++;
    }
  }
  return positions;
};

// domePositions takes the first half positions
// and generates the positions in a dome
var domePositions = function(n, r) {
  return spherePositions(2 * n, r).slice(0, n);
};


export default domePositions;
