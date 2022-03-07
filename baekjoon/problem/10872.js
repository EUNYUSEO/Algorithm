let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let num = Number(input);

let answer = 1;

for (let i = 1; i <= num; i++) {
  answer *= i;
}

console.log(answer);
