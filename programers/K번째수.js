const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort((a, b) => a - b);
    const index = commands[i][2] - 1;
    answer.push(arr[index]);
  }
  return answer;
}

console.log(solution(array, commands));
