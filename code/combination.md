조합
순서 상관없고, 중복되면 안된다.
[1, 2, 3] === [2, 1, 3] === [3, 2, 1]

function getCombinations(arr, selectNum) {
if (selectNum === 1) return arr.map((el) => [el]);

const result = [];
arr.forEach((fixed, index, origin) => {
const rest = origin.slice(index + 1);
const combinations = getCombinations(rest, selectNum - 1);
const attached = combinations.map((el) => [fixed, ...el]);
result.push(...attached);
});
return result;
}

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);

순열
순서가 중요하고 중복해도 된다.
[1, 2, 3] !== [2, 1, 3] !== [3, 2, 1]

중복순열
자기자신도 중복이어도 된다.
