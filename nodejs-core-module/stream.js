// The Stream module in Node.js is used to process data piece-by-piece (chunks), instead of loading full data into memory.

const fs = require('fs');
const stream = fs.createReadStream('file.txt');
stream.on("data", (chunk)=>{
    console.log(chunk.toString());
})