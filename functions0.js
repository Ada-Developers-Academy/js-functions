// variables can refer to functions
var greet = hello;

greet('Ada'); // => hello Ada
hello('Ada'); // => hello Ada

// functions can be declared like this:
function hello(name) {
  console.log('hello ' + name);
}

console.log('Are references to the same function equal?', greet === hello);

// you can also declare a function like this:
var add = function(a,b) {
  return a + b;
};
console.log(add(40, 2)); // => 42

// You can call functions with any number of arguments - javascript doesn't care!
// What happens when we call the following?
console.log('add:');
console.log(add(1,2,3,4,5));
console.log(add());


// The magical "arguments" keyword
function addABunch() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log('addABunch:');
console.log(addABunch(1,2,3,4,5));
console.log(addABunch());
