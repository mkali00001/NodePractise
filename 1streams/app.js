import fs from 'fs/promises';

async function processFile() {
    console.time("Execution Time");

    let contentBuffer = await fs.readFile("C:\\Users\\DELL\\Desktop\\dearComrade.mkv");

    await fs.writeFile("deva_copy.mkv", contentBuffer);

    console.timeEnd("Execution Time");
}

processFile().catch(console.error);
