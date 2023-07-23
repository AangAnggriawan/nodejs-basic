// // Versi Sysnchronoos
// const fs = require('fs');

// const fileReadcallback = (error, data) => {
//     if (error) {
//         console.log('Gagal Membaca erkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('todo.txt', 'UTF-8', fileReadcallback);


// Versi Asynchronous
// const fs = require('fs');

// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data)

// Latihan
// Versi asynchronous

// const fs = require('fs');
// const readFile = (error, data) => {
//     if (error) {
//         console.log('Gagal Membaca erkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('notes.txt', 'UTF-8', readFile);


// versi synchronous
// const fs = require('fs');
 
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);

