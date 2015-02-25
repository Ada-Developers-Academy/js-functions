// implement the filterArray function below
// It takes two arguments:
//
// 1. an array
// 2. a function that returns true or false
//
// It should return an array that contains only the elements of the array for which the function returns true
//
function filterArray(array, filterFunction) {
  // your code here!
}

function isEven(number) {
  return number % 2 === 0;
}

function isMagic(number) {
  return number % 2 === 0;
}

var numbers = [1,2,3,4,5,6,9,234, 822];

var evens = filterArray(numbers, isEven);
console.log(evens, ' should be ', [2, 4, 6, 234, 822]);

var magic = filterArray([1,2,3,4,5,6,9,234, 822], isMagic);
console.log(result, ' should be ', [3]);

