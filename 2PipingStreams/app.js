import fs, { read } from 'fs'

let readStream = fs.createReadStream('C:\\Users\\DELL\\Desktop\\video.mp4', {highWaterMark:100*1024*1024})
let writeStream = fs.createWriteStream('cpy.mp4', {highWaterMark:100*1024*1024})
console.time()
readStream.pipe(writeStream)

setTimeout(()=>{
readStream.unpipe(writeStream)
console.log('Unpiped after 2 seconds')
},2000)


writeStream.on('finish',()=>{
    console.timeEnd()
    console.log('Completed')
})


// readStream.on('data',(chunk)=>{
//     let isEmpty = writeStream.write(chunk)
//     if(!isEmpty){
//         readStream.pause()
//     }
// })

// writeStream.on('drain', ()=>{
//     readStream.resume()
// })