import fs from 'fs'


console.time()
for(let i = 1; i <= 100000; i++){
    if(i === 1){
        fs.writeFileSync('numbers.txt', `${i}, `, (err)=>{
            if(err) console.log(err)
        })
    }else{
        fs.appendFileSync('numbers.txt', `${i}, `, (err)=>{
            if(err) console.log(err)
        })
    }
}

console.timeEnd()


// time - 1200 ms
// let writeStream = fs.createWriteStream('streamNums.txt')
// console.time()
// for(let i = 1; i<=100000; i++){
//     writeStream.write(`${i}, `)
// }
// writeStream.end()

// writeStream.on('finish', ()=>{
//     console.timeEnd()
// })