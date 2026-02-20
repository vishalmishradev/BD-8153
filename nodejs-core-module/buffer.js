//In Node.js, a Buffer is a temporary memory storage used to store raw binary data.

const buffer=Buffer.from("Vishal");  //used for creating memory from string
console.log(buffer);

//output <Buffer 56 69 73 68 61 6c>

const memory = Buffer.alloc(10); // is used for allocating memory
console.log(memory);

//output <Buffer 00 00 00 00 00 00 00 00 00 00>

const array = Buffer.from([65,66,67]);
console.log(array.toString());
console.log(array.length); //calculating buffer length

//output ABC

const writeBuffer = Buffer.alloc(10); //used for writing in the alloacated memory
writeBuffer.write("hii");
console.log(writeBuffer.toString());
console.log(writeBuffer.toJSON);


const password = Buffer.from("password");

const base64 = buffer.toString("base64");

console.log(base64);


