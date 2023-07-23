// // const fs = require('fs');
 
// // const writableStream = fs.createWriteStream('output.txt');

// // Lalu untuk menuliskan data pada writable stream, gunakan method write().
// const fs = require('fs');

// const writableStream = fs.createWriteStream('output.txt');
 
// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end();
// // writableStream.end('Akhir dari writable stream!');

// Latihan
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8');


const writableStream = fs.createWriteStream('output.txt');
writableStream.write(data);