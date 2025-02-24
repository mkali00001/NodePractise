// import fs from 'fs'
import fs from 'fs/promises'

// let fd1 = fs.openSync('hello.txt')
// console.log(fd1)

// // or

// fs.open('hello.txt',(err,fd)=>{
//     console.log(fd)
// })



// ===============================================================
// Reading file using file descriptor

// let fd1 = fs.openSync('hello.txt')
// fs.read(fd1,(err,byteRead,bufferData)=>{
//     console.log(err)
//     console.log(byteRead)
//     console.log(bufferData.byteLength)
//     console.log(bufferData.toString())
// })


// ==================================================================
// Writing data in file with file descriptor

// let fd = fs.openSync('hello.txt', 'w')
// console.time()
// for(let i = 1; i<=100000; i++){
//     fs.writeSync(fd,`${i} `)
// }
// fs.closeSync(fd)
// console.timeEnd()


// =====================================================================
// Handling file using Promises

let fileHandler = await fs.open('hello.txt', 'w+')
console.log(fileHandler)
let {buffer, bytesRead} = await fileHandler.read({
    buffer: Buffer.alloc(10)
})

console.log(buffer, bytesRead)

let {buffer : wrotedBuffer, bytesWritten} = await fileHandler.write('Hello')
console.log(wrotedBuffer, bytesWritten)

fileHandler.close()