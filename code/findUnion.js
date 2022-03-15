// 합집합 찾기 함수
function main(n) {
  /*
  인덱스는 노드 번호를 뜻하고 요소는 부모 노드를 의미
  최초 배열은 자기 자신이 부모 노드
  예) 입력 n = 3 -> [empty, 1, 2, 3] 배열 생성
                    노드 1의 부모 노드: 1,
                    노드 2의 부모 노드: 2,
                    노드 3의 부모 노드: 3
  */
  const arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    arr[i] = i;
  }

  unionParent(arr, 1, 2);
  unionParent(arr, 2, 3);

  console.log(arr);

  console.log(findeParent(arr, 1, 2));
  console.log(findeParent(arr, 1, 3));
  console.log(findeParent(arr, 3, 5));
  console.log(findeParent(arr, 4, 5));
}

// 부모 노드를 찾는 재귀 함수
function getParent(arr, n) {
  if (arr[n] === n) return n;

  return (arr[n] = getParent(arr, arr[n]));
}

// 두 개의 노드를 같은 부모 노드로 합치는 함수 -> 노드끼리 연결
function unionParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  // 두 노드 중 부모 노드 값이 더 작은 값으로 합친다
  if (a < b) arr[b] = a;
  else arr[a] = b;
}

// 같은 부모 노드를 갖는지 확인하는 함수
function findeParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  if (a === b) return true;
  else return false;
}

main(5);
