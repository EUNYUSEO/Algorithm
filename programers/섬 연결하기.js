function solution(n, costs) {
  // n = 4;
  // coasts = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]];
  // 크루스칼 알고리즘으로 풀이
  // 필요한 로직
  // 1. 부모 노드 찾기
  // 2. 최상위 부모 노드로 병합
  // 3. 같은 부모 노드를 갖고있는지 확인

  function getParent(arr, n) {
    if (arr[n] === n) return n;
    return (arr[n] = getParent(arr, arr[n]));
  }

  function unionParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    if (a < b) arr[b] = a;
    else arr[a] = b;
  }

  function findParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    if (a === b) return true;
    return false;
  }

  // 비용 기준으로 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 사이클 확인을 위한 배열 생성
  const graph = new Array(n);
  for (let i = 0; i <= n; i++) {
    graph[i] = i;
  }

  let sum = 0;
  for (let i = 0; i < costs.length; i++) {
    // 간선 개수만큼 반복
    if (!findParent(graph, costs[i][0], costs[i][1])) {
      sum += costs[i][2];
      unionParent(graph, costs[i][0], costs[i][1]);
    }
  }

  return sum;
}

const n = 4;
const arr = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];
console.log(solution(n, arr));
