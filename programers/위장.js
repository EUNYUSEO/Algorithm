const clothes1 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

const clothes2 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

const clothes3 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
  ['red_jean', 'pants'],
];

const clothes4 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['orange_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
  ['red_jean', 'pants'],
  ['pink_hoodie', 'hoodie'],
];

function solution(clothes) {
  // 의상 종류 별로 입을 수 있는 의상의 개수 확인 ex) headgear: 2, eyewear: 2, pants: 1, hoodie: 1
  // 해당 의상 종류를 안 입는 경우도 있으니 안 입는 경우의 수 1 증가
  // 입을 수 있는 의상 개수(안 입는 경우의 수를 더한)를 각각 곱한다
  // 모두 다 안 입을 수는 없으니 결과값에서 1 감소
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] ? obj[clothes[i][1]]++ : (obj[clothes[i][1]] = 1);
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

console.log(solution(clothes1));
console.log(solution(clothes2));
console.log(solution(clothes3));
console.log(solution(clothes4));
