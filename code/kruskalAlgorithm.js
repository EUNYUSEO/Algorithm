/* 크루스칼 알고리즘: 가장 적은 비용으로 모든 노드 연결
                      최소 비용 신장 트리를 만들기 위한 대표적인 알고리즘
*/
function kruskal(n, arr) {
  // n = 5;
  // -> 노드의 수
  // arr = [[1, 2, 3], [1, 3, 2], [2, 5, 3], [3, 4, 6] , [4, 5, 4]];
  // arr[i][0]: 노드 번호, arr[i][1]: 노드 번호, arr[i][2]: 두 개의 노드 사이의 거리(혹은 연결하는 비용)

  // 부모 노드 찾기
  function getParent(set, x) {
    if (set[x] === x) return x;
    return (set[x] = getParent(set, set[x]));
  }

  // 두 개의 노드를 같은 부모 노드로 병합
  function unionParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    if (a < b) set[b] = a;
    else set[a] = b;
  }

  // 같은 부모 노드를 갖는지 확인
  function findParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    if (a === b) return true;
    else return false;
  }

  // 간선의 비용으로 오름차순 정렬
  arr.sort((a, b) => a[2] - b[2]);

  // 사이클 확인을 위한 배열 생성
  // -> 각 노드가 어느 그래프에 포함되어 있는지 확인하기 위해
  const set = new Array(n);
  for (let i = 1; i <= n; i++) {
    set[i] = i;
  }

  let coast = 0;
  for (let i = 0; i < arr.length; i++) {
    // 동일한 부모를 가르키지 않는 경우에만 선택 -> 사이클이 발생하지 않는 경우
    if (!findParent(set, arr[i][0], arr[i][1])) {
      // 비용 추가
      coast += arr[i][2];
      unionParent(set, arr[i][0], arr[i][1]);
    }
  }

  return coast;
}

const n = 4;
const arr = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];
console.log(kruskal(n, arr));
