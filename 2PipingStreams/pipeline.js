import fs from 'fs'
import { pipeline } from 'stream'

let readStream = fs.createReadStream('C:\\Users\\DELL\\Desktop\\video.mp4', {highWaterMark:100*1024*1024})
let writeStream = fs.createWriteStream('cpy.mp4')

pipeline(readStream, writeStream, (err)=>{
    console.log(err)
})

setTimeout(()=>{
    readStream.destroy('Khatam tata bye bye 😁')
}, 1000)

setInterval(()=>{
    console.log('chalu h 😂')
}, 1000)