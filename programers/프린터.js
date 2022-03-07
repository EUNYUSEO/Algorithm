const priorities1 = [2, 1, 3, 2];
const priorities2 = [1, 1, 9, 1, 1, 1];
const location1 = 2;
const location2 = 0;

function solution(priorities, location) {
  // priorities의 최대값을 구한다.
  // priorities의 첫번째 요소가 최대값과 다르다면 첫번째 요소를 맨 뒤로 보내고 location 1 감소
  // 같다면 cnt 1 증가, location이 0이면 cnt 리턴
  // 만약 location이 -1이면 priorities의 마지막 인덱스 번호로 재할당

  let cnt = 0;
  let max = 0;

  while (true) {
    max = Math.max.apply(null, priorities);
    let num = priorities.shift();

    if (num === max) {
      cnt++;
      if (location === 0) return cnt;
    } else {
      priorities.push(num);
    }
    location--;

    if (location < 0) location = priorities.length - 1;
  }
}

console.log(solution(priorities1, location1));
console.log(solution(priorities2, location2));
