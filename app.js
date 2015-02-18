/**
 * Sample app for CI testing using callbacks
 */


/**
 * Add funciton
 */
var add = function(a, b, cb) {
  var sum = a + b;
  cb(sum);
};



var a = 5;
var b = 7;

add(a, b, function(sum) {
  console.log(sum);
});

module.exports = add;
