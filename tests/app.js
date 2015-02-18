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
  it('Should add 5 and 7 to get 12 as result', function(done) {
    add(5, 7, function(sum) {
      sum.should.equal(12);
      done();
    });
  });
});
