var request = require('superagent');
var expect = require('expect.js');

describe('Suite Restaurant', function(){
    it('must return restaurants', function (done){
        request.get('localhost:3000/api/v1/restaurants').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });
    });
});