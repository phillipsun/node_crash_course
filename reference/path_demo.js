const path = require('path');

// Base file name (using 'path' module)
console.log(path.basename(__filename));

// Directory name (using 'path' module)
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths -- example '../test/hello.html'
console.log(path.join(__dirname, 'test', 'hello.html'));
