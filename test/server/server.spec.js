// var server = require('../../app.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var should = chai.should();
var fs = require('fs');

describe('server', function() {
  xit('should pass a test', function(done) {
    request(`http://localhost:9999`, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  xdescribe('#get()', function () {

    it('should get an image', function (done) {
      request('http://127.0.0.1:9999/api/images/yosemite1.jpg', function (err, response, body) {
        should.not.exist(err);
        response.statusCode.should.equal(200);
        should.exist(body);
        done();
      });
    });

    it('should get 404 when the image not exists', function (done) {
      request('http://127.0.0.1:9999/api/images/redwoods.png', function (err, response, body) {
        should.not.exist(err);
        response.statusCode.should.equal(404);
        done();
      });
    });

    it('should get all images', function (done) {
      request('http://127.0.0.1:9999/api/images', function (err, response, body) {
        should.not.exist(err);
        response.statusCode.should.equal(200);
        JSON.parse(body).files.should.have.length(8);
        done();
      });
    });
  });

  xdescribe('#post()', function () {

    before(function (done) {
      var boundary = Math.random();
      boundary = '----WebKitFormBoundaryIY5LjARPb2dO0B4Q';

      var options = {
        url: 'http://127.0.0.1:9999/api/images',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data; boundary=' + boundary,

        }
      };
      var doSomething = function() {
        var stream = fs.createReadStream('./test/server/bigsur2.jpg');
        stream.pipe(request.post(options));
      };
      doSomething().should.eventually.equal('').notify(done);



      setTimeout(function() { 
        console.log('done executed'); done();
      }, 1000);
      // stream.pipe(request.post(options, function(err, res) {
      //   console.log('On pipe stream request ', err, res);
      //   done();
      // }));
      
    });

    it('should get the image', function (done) {
      request('http://127.0.0.1:9999/api/images/yosemite1.jpg', function (err, response, body) {
        should.not.exist(err);
        response.statusCode.should.equal(200);
        should.exist(body);
        done();
      });
    });
  });




});
