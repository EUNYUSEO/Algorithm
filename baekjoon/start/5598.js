let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let str = String(input).toUpperCase();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let answer = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'A' || str[i] === 'B' || str[i] === 'C') {
    const index = alphabet.indexOf(str[i]) + 23;
    answer += alphabet[index];
  } else {
    const index = alphabet.indexOf(str[i]) - 3;
    answer += alphabet[index];
  }
}

console.log(answer);
