/**
 * Sample test for testing CI
 */

// Module dependencies
var add = require('../app');
var chai = require('chai');
should = chai.should();


/**
 * Add function test
 */

describe('# Add function', function() {
  it('Should add 12 and 7 to get 19 as result', function(done) {
    add(12, 7, function(sum) {
      sum.should.equal(19);
      done();
    });
  });
});
