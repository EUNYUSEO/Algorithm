const N1 = 5;
const N2 = 4;
const stages1 = [2, 1, 2, 6, 2, 4, 3, 3];
const stages2 = [4, 4, 4, 4, 4];

function solution(N, stages) {
  // 실패율 구하는 공식 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  // stages를 오름차순으로 정렬한다. [6];
  // 실패율 저장할 배열 생성 (fail)
  // stages의 길이만큼 반복, 각 스테이지 별로 실패율 확인한다.
  // stage 1 = stages에서 1이 몇갠지 센다. - cnt
  // stage 1의 실패율 = cnt / stages의 길이
  // fail에 실패율 저장한다.
  // stages의 길이를 맨 앞에서부터 cnt만큼 자른다.
  // 만약 stages가 1개 남았고 요소가 N + 1이라면 break;
}

console.log(solution(N1, stages1));
console.log(solution(N2, stages2));
