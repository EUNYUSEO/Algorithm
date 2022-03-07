function getCombinations(arr, selectNum) {
  //base case
  if (selectNum === 1) return arr.map((el) => [el]);
  // [[3],[4],[5]];
  let result = [];
  // recursive case
  arr.forEach((fixed, index, origin) => {
    // arr === origin
    const rest = origin; // 중복순열
    // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // origin 전체에서 나 빼고 리얼 나머지 - 순열
    // const rest = origin.slice(index + 1); // 자기자신 빼고 나머지에 담아주려고 .slice(index + 1) - 조합
    // reset === [3, 4, 5]
    const combinations = getCombinations(rest, selectNum - 1);
    // combinations ==== [[3], [4], [5]];
    const attached = combinations.map((el) => [fixed, ...el]);
    // attached === [[2, 3], [2, 4], [2, 5]];
    result.push(...attached);
  });
  return result;
}

let result = getCombinations([1, 2, 3], 3);
console.log(result);

// 조합
// 순서가 상관없고 중복이 되면 안됩니다.
// [1, 2, 3] === [1, 3, 2] === [3, 2, 1]

// [1, 2, 3, 4, 5], 2
// [1] [2, 3, 4, 5] -> [1, 2], [1, 3], [1, 4], [1, 5]
// [2] [3, 4, 5] -> [2, 3], [2, 4], [2, 5]
// [3] [4, 5] -> [3, 4], [3, 5]
// [4] [5] -> [4, 5]

// 순열
// 순서가 상관있고 중복이 되면 안된다.
// [1, 2, 3] !== [1, 3, 2]
// [1, 2, 3, 4, 5], 2
// [1] [2, 3, 4, 5] -> [1, 2] ...
// [2] [1, 3, 4, 5] -> [2, 1] ...

// 중복순열
// 순서가 상관있고 자기자신을 중복해도 된다.

// 타란~ tada~
