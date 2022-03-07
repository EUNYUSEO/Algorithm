function getCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => [el]);

  let result = [];
  arr.forEach((fixed, index, origin) => {
    // origin = arr이다, 자기 자신 배열
    // const rest = origin; // 중복순열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 순열
    // const rest = origin.slice(index + 1); // 조합
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

const example = [0, 1, 3];
const result = getCombinations(example, 3);
console.log(result);

// [1, 2, 3, 4, 5], 2
// [1] [2, 3, 4, 5] -> [1, 2], [1, 3], [1, 4], [1, 5]
// [2] [3, 4, 5] -> [2, 3], [2, 4], [2, 5]
// [3] [4, 5] -> [3, 4], [3, 5]
// [4] [5] -> [4, 5]
