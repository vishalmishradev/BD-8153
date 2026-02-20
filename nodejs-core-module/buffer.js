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


