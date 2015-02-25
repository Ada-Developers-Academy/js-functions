// now let's make something cool
// ok, not _that_ cool - but hopefully interesting
function doubleEachElement(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    //result[i] = array[i] + array[i];
    result.push(array[i] + array[i]);
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

