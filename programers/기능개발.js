const progresses1 = [93, 30, 55];
const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds1 = [1, 30, 5];
const speeds2 = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let queue = progresses;
  let answer = [];
  let count = 0;

  while (queue.length > 0) {
    queue = queue.map((el, idx) => (el = el + speeds[idx]));

    if (queue.length === 1) {
      answer.push(1);
      break;
    }

    for (let i = 0; i < queue.length; i++) {
      if (queue[i] >= 100) {
        count++;
      }
      if (queue[i] < 100 && count >= 1) {
        answer.push(count);
        count = 0;
        queue.splice(0, i);
        break;
      }
      if (queue[i] < 100 && count < 1) break;
    }

    if (count >= 1) {
      answer.push(count);
      break;
    }
  }

  return answer;
}

console.log(solution(progresses1, speeds1));
console.log(solution(progresses2, speeds2));

// 큐에 progresses가 들어옴
// 각 speeds에 맞게 progresses 증가
// 큐에 들어온 첫번째 요소가 100이 되었는지 확인
// 100이라면 count 1 증가,
