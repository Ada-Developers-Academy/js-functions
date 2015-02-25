
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
function callAnotherFunction(otherFunction) {
  return otherFunction();
}

// what will happen?
callAnotherFunction(function() {
  console.log('BOOM');
});

// now let's make something cool
// ok, not _that_ cool - but hopefully interesting
function doubleEachElement(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = array[i] + array[i];
  }
  return result;
}

console.log('doubleEachElement([1,2,3])', doubleEachElement([1,2,3]));

// what if we want to triple each result? Or maybe add one to each element?
// let's make a generic way to do this
function transformEachElement(array, transformFunction) {
  var result = [];
  for (var i=0; i < array.length; i++) {
    result[i] = transformFunction(array[i]);
  }
  return result;
}

function triple(number) {
  return number * 3;
}

console.log('transformEachElement([1,2,3], triple)', transformEachElement([1,2,3], triple));

// What we called transformEachElement is more generally called "Map"
// (like in ruby)
//
// map is actually built into javascript's Array in recent versions of the language:

var tripled = [1,2,3].map(triple);

console.log('[1,2,3].map(triple)', tripled);

