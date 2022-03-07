let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let arr = input.map((el) => Number(el)).filter((el) => el % 2 === 1);

if (arr.length === 0) console.log(-1);
else {
  const sum = arr.reduce((sum, el) => sum + el, 0);
  const min = Math.min.apply(null, arr);

  console.log(sum);
  console.log(min);
}
