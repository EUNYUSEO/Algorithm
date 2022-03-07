const answers = [5, 1, 4, 2, 1, 3, 2, 1, 4, 3];

function solution(answers) {
  const firstPattern = [1, 2, 3, 4, 5];
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    const firstAnswer = i % firstPattern.length;
    const secondAnswer = i % secondPattern.length;
    const thirdAnswer = i % thirdPattern.length;

    if (answers[i] === firstPattern[firstAnswer]) {
      score[0]++;
    }
    if (answers[i] === secondPattern[secondAnswer]) {
      score[1]++;
    }
    if (answers[i] === thirdPattern[thirdAnswer]) {
      score[2]++;
    }
  }

  const maxScore = Math.max.apply(null, score);

  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxScore) result.push(i + 1);
  }

  return result;
}

console.log(solution(answers));

// 5, 6, 7, 9, 10, 11, 12, 13
