// The Path module in Node.js is used to work with file and folder paths safely.
const fs = require('fs');
const path = require('path');
const filepath = path.join("folder", 'file.txt');
console.log(filepath);


const result = path.parse("C:/folder/file.txt");

console.log(result);

console.log(path.resolve("file.txt"));

console.log(__dirname);

const pathfile =path.join(__dirname, "file.txt");
const data = fs.readFileSync(pathfile,'utf8');
console.log(data);