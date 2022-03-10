const participant1 = ['leo', 'kiki', 'eden'];
const completion1 = ['eden', 'kiki'];
const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];
const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion3 = ['stanko', 'ana', 'mislav'];

function solution(participant, completion) {
  // completion 요소가 participant에 존재하는지 확인
  // 존재한다면 해당 요소는 participant, completion에서 제거
  // participant의 길이가 1이 되면 종료
  // participant 요소 출력

  participant.sort();
  completion.sort();

  console.log(participant);
  console.log(completion);

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

console.log(solution(participant1, completion1));
console.log(solution(participant2, completion2));
