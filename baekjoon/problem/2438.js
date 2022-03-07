let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  let star = '';
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}
