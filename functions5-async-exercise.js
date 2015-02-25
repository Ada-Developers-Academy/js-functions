//
// Now for an asynchronous waterfall...
//
// It takes an initial value, an array of functions, and a callback which it should call at the end
//
// If any of the functions yields an error, it should stop processing and call the
//
// each function takes a value and
//
function asyncWaterfall(initialValue, functions, callback) {
  // replace with your code
  callback(new Error('replace with your code'));
}

function add2(value, callback) {
  // wait 1/4 second
  setTimeout(function() { callback(null, value + 2);}, 250);
}

function square(value, callback) {
  // wait 1/2 second
  setTimeout(function() { callback(null, value * value);}, 500);
}

function oddNumberHater(value, callback) {
  // calls back with error if passed an odd number
  // what a hater!
  if (value % 2 === 1) {
    callback(new Error('No odd numbers allowed!'));
  }
  else {
    callback(null, value);
  }
}

asyncWaterfall(3, [add2, square], function(error, result) {
  console.log('3, [add2, square] result');
  console.log(error, 'should be null');
  console.log(result, 'should be 25');
});

asyncWaterfall(3, [add2, oddNumberHater, add2], function(error, result) {
  console.log('3, [add2, oddNumberHater] result');
  console.log(error, 'should be an Error "No odd numbers allowed"');
  console.log(result, 'should be undefined');
});

asyncWaterfall(3, [add2, add2, square], function(error, result) {
  console.log('3, [add2, add2, square] result');
  console.log(error, 'should be null');
  console.log(result, 'should be 49');
});

