//

// Untuk menyimpan nilai pada env secara manual
// const server = new server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });


// Mendapatkan inpormasi yg sedang berjalan di memory
const memoryInformation = process.memoryUsage();
// console.log(memoryInformation);

const firstname = process.argv[2];
const Lastname = process.argv[3];

// console.log(`Hello ${firstname} ${Lastname}`);


const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++){
    // Proses Looping ini akan membuat penggunaan memory naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`hai ${yourName}`);
console.log(`Mode Environmnt: ${environment}`);
console.log(`Penguunaan Memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);


















