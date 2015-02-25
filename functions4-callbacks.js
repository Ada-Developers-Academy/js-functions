// Callbacks
//
// In javascript, only one code execution thread is active at any time
//
// Input and output ("I/O") - like reading from a file, writing to a database, or calling an API - takes a really long time compared to executing your own javascript code.
//
// Consider slow database queries or API calls in your rails applications - while you are waiting for the result of the call, execution of that "thread" is blocked
//
// Javascript takes a different approach:
// When you start an I/O operation, the current code that is being executed is suspended until the "expensive" operation has completed
// This frees up the single execution point to go do other things.
//
// One way to do this is with callbacks
//
// There are other ways to handle async execution:
//  - promises (like in angularjs),
//  - events (like in the browser).
//
// There are also some less commmon ways that you might want to learn about once you have these more common methods down pat: generators and fibers.
//
// In the node.js core libraries, and in many other javascript libraries, callbacks follow the following convention:

// function(error, result) {}

// if an error occurs, the first argument will be set to an Error object, otherwise the second argument will be set.

// Here's a very contrived example to show the conventions for invoking callbacks:
function theMagicNumber(number, callback) {
  if (number === 3) {
    callback(null, 'this is the magic number');
  }
  else {
    callback(new Error('not the magic number'));
  }
}

// Callbacks are a lot like  the "return" statment:
// - Gives the result to the function that called
// - Must be called once and only once

// How about a more practical example, with some actual I/O

function fileContainsString(filename, searchString, callback) {
  // node file system library
  var fs = require('fs');

  // read the file contents and call us back with them
  fs.readFile(filename, 'utf8', function(error, data) {
    if (error) {
      callback(error);
    }
    else {
      var result = {
        filename: filename,
        searchString: searchString,
        containsString: (data.indexOf(searchString) > -1)
      };

      callback(null, result);
    }
  });
}

// In node, __filename means "this file"

fileContainsString(__filename, 'Callbacks', console.log);
fileContainsString(__filename, 'Four score and seven years ago', console.log);
fileContainsString('NOT_A_REALFILENAME.txt', 'something', console.log);


// note the order in which these are printed
