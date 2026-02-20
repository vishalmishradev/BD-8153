// The Path module in Node.js is used to work with file and folder paths safely.

const path = require('path');
const filepath = path.join("folder", 'file.txt');
console.log(filepath);


const result = path.parse("C:/folder/file.txt");

console.log(result);

console.log(path.resolve("file.txt"));