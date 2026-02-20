// The Stream module in Node.js is used to process data piece-by-piece (chunks), instead of loading full data into memory.

const fs = require('fs');
const stream = fs.createReadStream('file.txt');
stream.on("data", (chunk)=>{
    console.log(chunk.toString());
})


const writableStrams = fs.createWriteStream("write.txt");
writableStrams.write("Hellow ",);
writableStrams.write("world");
writableStrams.write("\n Welcome to the world of Node js");
//writableStrams.end();

writableStrams.on("finish", ()=>{
    console.log("All data has been written");
});

writableStrams.on("error", (err)=>{
    console.log("Error in writing the stream!!!!!!!", err);
})

stream.pipe(writableStrams); //it connects writtable and readble strams

writableStrams.on("finish", ()=>{
    console.log("completed writing");
})