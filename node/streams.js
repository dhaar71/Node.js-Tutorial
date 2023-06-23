const fs = require('fs');


const readStream = fs.createReadStream('./blog3.txt',{encoding: 'utf8'});
const writestream = fs.createWriteStream('./blog4.txt');

readStream.on('data', (chunk)=>{
    console.log('.......NEW CHUNK......!');
    console.log(chunk);
    writestream.write('\nNEW CHUNK\n');
    writestream.write(chunk);
});