// functions can reference variables defined in "outer scope"
var currentInteger = 0;
function nextInteger() {
  currentInteger = currentInteger + 1;
  return currentInteger;
}

console.log(nextInteger()); // => 1
console.log(nextInteger()); // => 2

// Functions can call themselves(recursion)
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

console.log('fibonacci(11)', fibonacci(11)); // => 89

// functions can be passed as arguments to other functions
// this is where a lot of the fun stuff happens
// it is also very confusing at first
// don't worry if this seems crazy at first
function callAnotherFunction(f) {
  f();
}

// what will happen?
callAnotherFunction(function() {
  console.log('BOOM');
});

function bang() {
  console.log('BANG');
}

callAnotherFunction(bang);

