// membaca teks pada berkas secara bagian-per-bagian.
// dengan menggunakan method createReadStream() dari core module fs.

const fs = require('fs');
const readablesStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readablesStream.on('readable', () => {
    try {
        process.stdout.write(`[${readablesStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
}); 

readablesStream.on('end', () => {
    console.log('Done');
});