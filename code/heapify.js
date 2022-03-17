// Heap Sort - Bottom-Up

function maxHeapify(arr, n) {
  for (let i = 1; i < n; i++) {
    let c = i;

    do {
      const root = parseInt((c - 1) / 2);
      if (arr[root] < arr[c]) {
        const tmp = arr[root];
        arr[root] = arr[c];
        arr[c] = tmp;
      }
      c = root;
    } while (c !== 0);
  }

  for (let i = n - 1; i > 0; i--) {
    let tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;

    let root = 0;
    let c = 0;

    do {
      c = 2 * root + 1;

      if (c < i - 1 && arr[c] < arr[c + 1]) c++;

      if (c < i && arr[root] < arr[c]) {
        tmp = arr[root];
        arr[root] = arr[c];
        arr[c] = tmp;
      }

      root = c;
    } while (c < i);
  }

  return arr;
}

function minHeapify(arr, n) {
  for (let i = 1; i < n; i++) {
    let c = i;
    do {
      const root = parseInt((c - 1) / 2);
      if (arr[root] > arr[c]) {
        const tmp = arr[root];
        arr[root] = arr[c];
        arr[c] = tmp;
      }
      c = root;
    } while (c !== 0);
  }

  for (let i = n - 1; i > 0; i--) {
    let tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;

    let root = 0;
    let c = 0;

    do {
      c = 2 * root + 1;

      if (c < i - 1 && arr[c] > arr[c + 1]) c++;

      if (c < i && arr[root] > arr[c]) {
        tmp = arr[root];
        arr[root] = arr[c];
        arr[c] = tmp;
      }

      root = c;
    } while (c < i);
  }

  return arr;
}

const arr = [7, 6, 5, 8, 3, 5, 9, 1, 6];

console.log(maxHeapify(arr, 9));
console.log(minHeapify(arr, 9));
