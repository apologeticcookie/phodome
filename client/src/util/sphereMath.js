var createPoint = function(r, theta, phi) {

  var x = r * Math.sin(theta) * Math.cos(phi);
  var y = r * Math.sin(theta) * Math.sin(phi);
  var z = r * Math.cos(theta);

  return [x, y, z];
};

var getSpherePositions = function(N, r) {
  var positions = [];

  var nCount = 0;
  var a = 4 * Math.PI * Math.pow(r, 2) / N;
  var d = Math.pow(a, 0.5);
  var m0 = Math.round(Math.PI / d);
  var d0 = Math.PI / m0;
  var dP = a / d0;
  for (var m = 0; m < m0; m++) {
    var theta = Math.PI * (m + 0.5) / m0;
    var mP = Math.round(2 * Math.PI * theta / dP);
    for (var n = 0; n < mP; n++) {
      var phi = 2 * Math.PI * n / mP;
      positions.push(createPoint(r, theta, phi));
      nCount++;
    }
  }
  return positions;
};

export default getSpherePositions;
