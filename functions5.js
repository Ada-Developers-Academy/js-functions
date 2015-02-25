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

// Important rules for callbacks:
//
// - Must be called once and only once
// - If the first argument is set, it must be an Error

// Here's a very contrived example to show the conventions for invoking callbacks:
function theMagicNumber(number, callback) {
  if (number === 3) {
    callback(null, number + ' is the magic number');
  }
  else {
    callback(new Error( number + ' is not the magic number'));
  }
}

theMagicNumber(3, console.log);
theMagicNumber(4, console.log);

// An actually aynchronous example
function waitAWhile(number, callback) {
  // random delay up to 5 seconds
  var delay = Math.random() * 5000;

  setTimeout(function() {
    callback(null, number);
  }, delay);
}

for (var i = 0; i < 10; i++) {
  waitAWhile(i, console.log);
}
