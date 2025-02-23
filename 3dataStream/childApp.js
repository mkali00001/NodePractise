// console.log("Hello from childApp.js")
import { createReadStream } from "fs";
let readStream = createReadStream('C:\\Users\\DELL\\Desktop\\video.mp4')
readStream.pipe(process.stdout)