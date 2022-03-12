const s1 = '3people unFollowed me';
const s2 = 'for the last week';
const s3 = 'aaaaa aaa';
const s4 = 'abc  abC 1bc   EDF';

function solution(s) {
  // 공백을 기준으로 잘라서 배열로 치환
  // 맨 첫 문자가 숫자인지 아닌지 판단
  // 숫자가 아니면 첫 문자는 대문자로 치환
  // 나머지 문자는 소문자로 치환 (숫자든 아니든 공통적인 부분)
  // 요소 사이에 공백을 두고 문자열로 치환하여 리턴

  const arr = s.split(' ');
  const numRegex = /\d/;
  const upperRegex = /[A-Z]/;

  arr.forEach((el, idx) => {
    let upperCase = '';
    let lowerCase = '';

    if (el.length > 0) {
      if (!numRegex.test(el[0])) upperCase = el[0].toUpperCase();
      else upperCase = el[0];

      if (upperRegex.test(el.slice(1))) lowerCase = el.slice(1).toLowerCase();
      else lowerCase = el.slice(1);

      arr[idx] = upperCase + lowerCase;
    }
  });

  return arr.join(' ');
}
