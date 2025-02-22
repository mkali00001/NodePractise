// import { time } from 'console'
// import fs from 'fs'

// console.time()
// let readStream = fs.createReadStream('C:\\Users\\DELL\\Desktop\\teacher.mp4', { highWaterMark: 50 * 1024})
// let writeStream = fs.createWriteStream('copy.mp4')

// readStream.on('data', (chunk) => {
//     let isEmpty = writeStream.write(chunk)
//     if(!isEmpty){
//         readStream.pause()
//     }
// })

// writeStream.on('drain',()=>{
//     readStream.resume()
// })

// readStream.on('end',()=>{
//     console.timeEnd()
// })

// import fs from 'fs'

// let writeStream = fs.WriteStream('text.txt', {highWaterMark : 4})
// let i =1
// function writeA(){
//     while(i <= 29){
//         console.log(writeStream.writableLength)
//         let isEmpty = writeStream.write('a')
//         i++
//         if(!isEmpty){
//             break;
//         }
//         console.log(isEmpty)
//     }
// }

// writeA() 

// writeStream.on('drain', ()=>{
//     writeA()
// })

// import fs, { createWriteStream } from 'fs'
// let writeStream = createWriteStream('text.txt', {highWaterMark:4})

// console.log(writeStream.writableLength)

// writeStream.write('a')
// writeStream.write('b')
// writeStream.write('c')
// writeStream.write('d')

// console.log(writeStream.writableLength)

// writeStream.end()

// setTimeout(()=>{
//     console.log(writeStream.writableLength)
// }, 500)


// writeStream.on('open', (fd)=>{
//     console.log('fd', fd)
// })

// writeStream.on('finish',()=>{
//     console.log('Finished')
// })

// If I want to write only one data so I can use this 

import fs from 'fs'

let writeStream =  fs.createWriteStream('text.txt', {highWaterMark:4})

writeStream.end(`Hello I'm Kaif!`)

writeStream.on('finish',()=>{
    console.log('Finished')
})