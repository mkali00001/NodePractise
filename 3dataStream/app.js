import { spawn } from "child_process";
import { createWriteStream } from "fs";

// console.log(process.stdin)
// console.log(process.stdout)
// console.log(process.stderr)

// console.log("debug")

// import fs from 'fs'

// let writeStream = fs.createWriteStream('sample.txt')

// process.stdin.on('data', (chunk)=>{
//     writeStream.write(chunk)
// })

// process.stdin.pipe(writeStream)





// File Descriptor
// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)




// Using child Process
// import { spawn } from "child_process";
// let childProcess = spawn('cat', ['sample.txt'])
// childProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// import {spawn} from 'child_process'
// let childProcess = spawn('node', ['childApp.js']);
// childProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })



// writing from childApp.js
let childProcess = spawn('node', ['childApp.js']);
let writeStream = createWriteStream('copy.mp4')
childProcess.stdout.pipe(writeStream)