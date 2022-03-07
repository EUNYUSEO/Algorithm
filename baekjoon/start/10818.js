let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const arr = input[1].split(' ');

const min = Math.min.apply(null, arr);
const max = Math.max.apply(null, arr);

console.log(min, max);
