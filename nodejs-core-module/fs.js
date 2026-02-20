// The FS (File System) module in Node.js is used to work with files and folders.

//reading a file
const fs = require('fs');
const data = fs.readFileSync('file.txt');
console.log(data.toString());


//writing a file
fs.writeFileSync("file.txt", "Hellow node js");

fs.unlinkSync("file.txt");