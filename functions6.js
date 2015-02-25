// How about a more practical example, with some actual I/O?

//
// Read a file and tell us if it contains the given text
//
function fileContainsString(filename, searchString, callback) {
  // node file system library
  var fs = require('fs');

  // read the file contents and call us back with them
  fs.readFile(filename, 'utf8', function(error, data) {
    if (error) {
      //notify
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

// In node, __filename means "this source file"
fileContainsString(__filename, 'Callbacks', console.log);

fileContainsString(__filename, 'Four score ' + 'and seven years ago', console.log);

fileContainsString('NOT_A_REALFILENAME.txt', 'something', console.log);

// note the order in which these are printed
