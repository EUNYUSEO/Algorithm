const number1 = '1924';
const number2 = '1231234';
const number3 = '4177252841';
const number4 = '987654321';
const k1 = 2;
const k2 = 3;
const k3 = 4;
const k4 = 5;

function solution(number, k) {
  // 스택을 이용하여 풀기
  // 스택의 마지막 값이 비교 값(number[i])보다 작으면
  // 스택의 마지막 값 제거(pop), k--
  // 그렇지 않으면 스택에 비교 값(number[i]) 삽입(push)
  //
  // 비교 값은 남아있는데 k가 0보다 작아진 경우가 있을 수 있으니
  // 원래 목표였던 길이(number.length - k)만큼 자르고 출력
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }
  stack.splice(stack.length - k);
  return stack.join('');
}

// console.log(solution(number1, k1));
// console.log(solution(number2, k2));
// console.log(solution(number3, k3));
console.log(solution(number4, k4));
