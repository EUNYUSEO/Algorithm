let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const max = Math.max.apply(null, input);

console.log(max);
console.log(input.indexOf(String(max)) + 1);
