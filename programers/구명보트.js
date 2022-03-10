const people1 = [70, 50, 80, 50];
const people2 = [70, 80, 50];
const limit1 = 100;
const limit2 = 100;

function solution(people, limit) {
  // limit은 people의 최대값보다 항상 크므로 people을 오름차순으로 정렬 풀기
  // 큐 이용하여 풀기
  // 큐에 people의 요소를 차례로 삽입
  // 큐의 요소 합이 limit보다 같으면 카운트 1 증가 -> 큐 비우기
  // 큐의 요소 합이 limit보다 작으면 다음 people의 요소 삽입
  // 큐의 요소 합이 limit보다 크면 큐의 마지막 요소는 다시 people 첫번째 요소로 삽입
  // -> 더이상 보트에 못 태운다 판단, 카운트 1 증가 -> 큐 비우기

  people.sort((a, b) => b - a);
  let queue = [];
  let count = 0;

  while (people.length > 0) {
    queue.push(people.shift());

    let sum = queue.reduce((pre, cur) => pre + cur, 0);

    if (people.length === 0 && sum < limit) {
      count++;
      break;
    } else if (sum === limit) {
      count++;
      queue = [];
    } else if (sum > limit) {
      people.unshift(queue.pop());
      count++;
      queue = [];
    }
  }

  return count;
}

console.log(solution(people1, limit1));
console.log(solution(people2, limit2));
