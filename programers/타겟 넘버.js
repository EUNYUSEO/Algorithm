const numbers1 = [1, 1, 1, 1, 1];
const numbers2 = [4, 1, 2, 1];
const target1 = 3;
const target2 = 4;

// function solution(numbers, target) {
//   // https://bomoto.tistory.com/60?category=933451
//   // numbers의 총합 - target / 2 = 잉여 숫자
//   // 잉여 숫자가 되기 위한 조합의 수를 리턴
//   // --------------------------------------------------------
//   // dfs 풀이 https://seanb12.tistory.com/259

//   let answer = 0;

//   dfs(0, 0);

//   function dfs(level, sum) {
//     if (level === numbers.length) {
//       if (sum === target) answer += 1;
//       return;
//     }

//     dfs(level + 1, sum + numbers[level]);
//     dfs(level + 1, sum - numbers[level]);
//   }

//   return answer;
// }

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(x, value) {
    if (x < numbers.length) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(numbers1, target1));
console.log(solution(numbers2, target2));

// function dfs(startIndex, numbers, target) {
//   return (function dfsRecursive(num, index) {
//     if (index === numbers.length) {
//       if (num === target) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//     let num1 = num + numbers[index];
//     let num2 = num - numbers[index];

//     return dfsRecursive(num1, index + 1) + dfsRecursive(num2, index + 1);
//   })(0, startIndex);
// }
