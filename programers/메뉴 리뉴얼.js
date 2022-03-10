const orders1 = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const orders2 = ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'];
const orders3 = ['XYZ', 'XWY', 'WXA'];

const course1 = [2, 3, 4];
const course2 = [2, 3, 5];
const course3 = [2, 3, 4];

function solution(orders, course) {
  // 편의를 위해 orders 요소 문자열의 오름차순 정렬
  // course 요소만큼 orders 요소를 조합할건데
  // 만약 orders 요소의 길이보다 course 요소가 크다면 조합 x
  // 만약 orders 요소의 길이와 course 요소가 같다면 객체에 바로 담기
  // 조합 결과는 객체에 담기 -> {AB: 1, AC: 1, AD: 1, AF: 1, AG: 1}
  // 만약 객체에 조합한 결과가 존재한다면 count 증가
  // -> {AB: 1, AC: 4, AF: 1, AG: 1, BC: 2, BF: 2, BG: 2, CF: 2, CG: 2, FG: 2, CD: 3, CE: 3, DE:3 , AD: 2, AE: 2, AH: 1, CH: 1, DH: 1, EH: 1}
  // course 요소 하나의 조합만큼 끝났을 때 객체에서 제일 큰 값만 남기고 모두 제거
  // -> {AC: 4}
  // answer에 객체의 키 담고 객체 초기화 answer = ["AC"], {}

  orders.sort();
  let obj;

  orders.forEach((el, idx) => {
    for (let i = 0; i < course.length; i++) {
      if (el.length > course[i]) console.log(getCombinations(orders[idx].split(''), el));
    }
  });

  return obj;
}

function getCombinations(arr, selectNum) {
  if (selectNum === 1 || arr.length === selectNum) return arr.map((el) => el);

  let result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((el) => fixed + el);
    result.push(...attached);
  });

  return result;
}

console.log(solution(orders1, course1));
// console.log(solution(orders2, course2));
// console.log(solution(orders3, course3));
