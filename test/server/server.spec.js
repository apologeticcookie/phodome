var server = require('../../app.js');

describe('server', function() {
  it('should pass a test', function(done) {
    request(`http://localhost:9999`, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
