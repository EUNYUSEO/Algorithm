const numbers1 = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];
const numbers3 = [2, 2, 4];
const numbers4 = [0, 0, 2, 3];

function solution(numbers) {
  // 모든 number들을 string으로 바꿔주고 문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b)가 양수이면
  // ex) b(3) + a(30) - a(30) + b(3) => 330 - 303 = 양수
  // 3 30 순서를 그대로 유지한다.

  let temp = numbers.map((a) => String(a)).sort((a, b) => b + a - (a + b));

  // 모든 숫자가 0인 경우 000 이 나오지 않게 0을 출력
  if (temp.every((a) => a === '0')) {
    return '0';
  } else {
    return temp.join('');
  }
}

console.log(solution(numbers1));
console.log(solution(numbers2));
console.log(solution(numbers3));
console.log(solution(numbers4));
