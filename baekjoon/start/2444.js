let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let num = Number(input);

let answer = '';
for (let i = 1; i < num; i++) {
  for (let j = 1; j <= num - i; j++) {
    answer += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    answer += '*';
  }
  answer += '\n';
}
for (let i = num; i >= 1; i--) {
  for (let j = 1; j <= num - i; j++) {
    answer += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    answer += '*';
  }
  answer += '\n';
}
console.log(answer);
