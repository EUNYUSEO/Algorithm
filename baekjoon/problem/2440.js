let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let num = Number(input);

for (let i = num; i >= 1; i--) {
  let answer = '';
  for (let j = 1; j <= i; j++) {
    answer += '*';
  }
  console.log(answer);
}
