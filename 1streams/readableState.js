import fs, { read } from 'fs'

const readableStream = fs.createReadStream('chars.txt', {highWaterMark:1})

readableStream.on('data',(chunk)=>{
    console.log(readableStream.bytesRead)
    if(readableStream.bytesRead === readableStream.readableHighWaterMark){
        fs.writeFileSync('newText.txt', chunk)
    }else{
        fs.appendFileSync('newText.txt',chunk)
    }
    // fs.appendFileSync('newText.txt',chunk)
    readableStream.pause()
    setTimeout(()=>{
        readableStream.resume()
    }, 200)
})