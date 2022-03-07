const n = 6;
const lost = [6, 2, 4];
const reserve = [1, 5, 3];

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    const lostAndReserve = lost.indexOf(reserve[i]);
    if (lostAndReserve !== -1) {
      lost.splice(lostAndReserve, 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    const front = lost.indexOf(reserve[i] - 1);
    const back = lost.indexOf(reserve[i] + 1);

    if (front !== -1) {
      lost.splice(front, 1);
      reserve.splice(i, 1);
      i--;
    } else if (back !== -1) {
      lost.splice(back, 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  return n - lost.length;
}

console.log(solution(n, lost, reserve));

// 18, 20
