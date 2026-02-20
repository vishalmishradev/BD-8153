//The OS module in Node.js is used to get information about your operating system.

const os = require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());

console.log(os.freemem());
console.log(os.hostname());