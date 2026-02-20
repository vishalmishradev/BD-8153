// Worker Threads allow you to run JavaScript in parallel threads in OpenJS Foundation’s Node.js runtime.

const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js');

worker.on("message", (result)=>{
    console.log("Result from workers", result);
})

worker.on("error", (err)=>{
    console.log("Error occured", err);
})

console.log("Main thred running");
