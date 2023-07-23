const moment = require('../node_modules/lodash');

// const date = moment().format("MM Do YY");

// console.log(date);

const myOddEvenArray = moment.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(myOddEvenArray);