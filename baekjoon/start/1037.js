let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let divisor = input[1].split(' ').map((el) => Number(el));

const max = Math.max.apply(null, divisor);
const min = Math.min.apply(null, divisor);

console.log(max * min);
