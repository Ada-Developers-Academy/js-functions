
//
// implement the waterfall function below
// It takes an initial value and an array of functions
//
// it should call each function in order, passing the result of the previous function
// For example:
//
//
function waterfall(initialValue, functions) {
  // your code here
}

function add2(value) { return value + 2; }
function square(value) { return value * value; }

console.log(waterfall(4, [add2]), 'should be 6'); // => 4 + 2 
console.log(waterfall(4, [add2, square]), 'should return 36'); // =>  (4 + 2) ^ 2
console.log(waterfall(4, [square, add2]), 'should return 18'); // => (4 ^ 2) + 2
console.log(waterfall(4, [square, square]), 'should return 256'); // => ((4 ^ 2) ^ 2)

