const bridge_length1 = 2;
const bridge_length2 = 100;
const bridge_length3 = 100;
const weight1 = 10;
const weight2 = 100;
const weight3 = 100;
const truck_weights1 = [7, 4, 5, 6];
const truck_weights2 = [10];
const truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function solution(bridge_length, weight, truck_weights) {
  // 초기 세팅 (1초)
  // 현재 트럭 = truck_weights의 첫번째 요소
  // 현재 무게 = weight - 현재 트럭
  // bridge_length의 길이만큼 0으로 채워진 배열(bridge) 생성
  // bridge = 현재 트럭을 제일 앞에 삽입, 마지막 요소 pop

  // 반복(현재 무게가 0이 되면 종료) - 1초 증가
  // 현재 무게 = 현재 무게 - bridge의 마지막 요소(pop)
  // 현재 트럭 = truck_weights의 첫번째 요소

  // 현재 트럭 + 현재 무게 <= weight 면
  // bridge의 첫번째 요소로 현재 트럭 삽입
  // 현재 무게 = 현재 무게 + 현재 트럭

  // 현재 트럭 + 현재 무게 > weight
  // 현재 트럭은 트럭 배열의 첫번째 요소로 다시 삽입
  // bridge의 첫번째 요소로 0 삽입

  let cnt = 0;
  let currentTruck = truck_weights.shift();
  let totalTruckWeight = currentTruck;
  let bridge = new Array(bridge_length).fill(0);

  bridge.pop();
  bridge.unshift(currentTruck);
  cnt++;

  while (totalTruckWeight) {
    totalTruckWeight = totalTruckWeight - bridge.pop();
    currentTruck = truck_weights.shift();

    if (totalTruckWeight + currentTruck <= weight) {
      bridge.unshift(currentTruck);
      totalTruckWeight = totalTruckWeight + currentTruck;
    } else {
      truck_weights.unshift(currentTruck);
      bridge.unshift(0);
    }

    cnt++;
  }

  return cnt;
}

console.log(solution(bridge_length1, weight1, truck_weights1));
console.log(solution(bridge_length2, weight2, truck_weights2));
console.log(solution(bridge_length3, weight3, truck_weights3));
