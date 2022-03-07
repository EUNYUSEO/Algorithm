const numbers1 = '17';
const numbers2 = '011';
const numbers3 = '103';
const numbers4 = '1231';

function solution(numbers) {
  // 입력받은 문자열을 하나씩 배열(arr)에 담는다.
  // 1개로 얻을 수 있는 순열, 2개로 얻을 수 있는 순열 ... arr 길이만큼 반복
  // 얻은 순열을 모두 배열(result)에 담는다.
  // 예) [["0"], ["1"], ["3"], ["0", "1"], ["0", "3"], ["1", "0"], ["1", "3"], ... ["3", "1", "0"]]
  // result의 모든 요소들을 숫자로 치환 후 중복 확인
  // reesult의 요소들 중 소수 찾기 - cnt
  // cnt 출력
  let answer = [];

  for (let i = 1; i <= numbers.length; i++) {
    getPermutations([...numbers], i).forEach((v) => (isPrime(parseInt(v)) ? answer.push(parseInt(v)) : answer));
  }

  console.log([...new Set(answer)]);

  return [...new Set(answer)].length;
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getPermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => el);

  let result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNum - 1);
    const attached = permutations.map((el) => [fixed, ...el].join(''));
    result.push(...attached);
  });

  return result;
}

console.log(solution(numbers1));
console.log(solution(numbers2));
console.log(solution(numbers3));
console.log(solution(numbers4));
