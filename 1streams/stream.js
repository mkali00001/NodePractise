// import fs from 'fs'
// console.time()
// const readStream = fs.createReadStream("C:\\Users\\DELL\\Desktop\\deva.mkv", { highWaterMark: 1 * 1024 * 1024 })
// // readStream.on('data',(chunkBuffer)=>{
// //     console.log(chunkBuffer)
// //     console.log(chunkBuffer.byteLength)
// // })

// readStream.on('data', (chunkBuffer) => {
//     fs.appendFileSync('devacopy.mkv', chunkBuffer)
//     if (chunkBuffer.byteLength < 1 * 1024 * 1024) {
//         console.timeEnd()
//     }
// })

import fs from 'fs';
import cliProgress from 'cli-progress';

console.time("Execution Time");

// Input & Output File Paths
const inputFile = "C:\\Users\\DELL\\Desktop\\deva.mkv";
const outputFile = "devacopy.mkv";

// Get the Total File Size
const totalSize = fs.statSync(inputFile).size;
let writtenSize = 0;

// Create a Read Stream
const readStream = fs.createReadStream(inputFile, { highWaterMark: 1 * 1024 * 1024 }); // 1MB chunks

// Initialize Progress Bar
const progressBar = new cliProgress.SingleBar({
    format: 'Writing [{bar}] {percentage}% | {value}/{total} MB',
    barCompleteChar: '█',
    barIncompleteChar: '-',
    hideCursor: true
});
progressBar.start(totalSize / (1024 * 1024), 0); // Convert bytes to MB

// Listen to Data Event
readStream.on('data', (chunkBuffer) => {
    fs.appendFileSync(outputFile, chunkBuffer);
    
    writtenSize += chunkBuffer.length;
    progressBar.update(writtenSize / (1024 * 1024)); // Convert bytes to MB
});

// Listen to End Event
readStream.on('end', () => {
    progressBar.stop();
    console.timeEnd("Execution Time");
    console.log("File copied successfully!");
});

// Handle Errors
readStream.on('error', (err) => {
    progressBar.stop();
    console.error("Error:", err);
});
