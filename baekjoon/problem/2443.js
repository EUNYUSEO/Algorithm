// let fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split(' ');

// let num = Number(input);
let num = 5;

for (let i = num; i >= 1; i--) {
  let answer = '';
  for (let j = 1; j <= num - i; j++) {
    answer += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    answer += '*';
  }
  console.log(answer);
}
