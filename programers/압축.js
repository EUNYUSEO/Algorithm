function solution2(msg) {
  // 기준 문자가 사전에 존재하는지 확인
  // 존재한다면 사전의 색인 번호 출력, 입력에서 기준 문자 제거
  // 기준 문자 + 다음 문자가 사전에 존재하는지 확인
  // 존재하지 않는다면 사전에 등록
  // 문자열이 0이 될 때까지 반복

  let dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let answer = [];
  let str = msg[0];

  while (msg.length > 0) {
    if (dictionary.includes(str)) {
      // 검색할 문자열이 사전에 존재한다면
      if (msg[str.length]) str += msg[str.length];
      // 다음 문자가 존재한다면 (검색해야 할 문자가 존재한다면)
      else {
        // 더이상 검색할 문자가 없는 경우 (마지막인 경우)
        const index = dictionary.indexOf(str); // 색인 번호 추출
        answer.push(index + 1); // 정답 배열에 추가
        break; // 마지막으로 반복문 정지
      }
    } else {
      // 검색할 문자열이 사전에 존재하지 않는다면
      const char = str.slice(0, str.length - 1); // 정답 배열에 넣을 문자열 추출
      const index = dictionary.indexOf(char); // 색인 번호 추출
      answer.push(index + 1); // 정답 배열에 추가
      dictionary.push(str); // 존재하지 않는 문자열 사전 등록
      msg = msg.slice(char.length); // 정답에 추가한 문자열은 원본 문자열에서 제거
      str = msg[0]; // 검색할 문자 초기화
    }
  }

  return answer;
}

const msg =
  'THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS';

const value = [
  20, 8, 1, 20, 27, 29, 9, 19, 33, 31, 30, 28, 20, 33, 14, 15, 39, 19, 41, 43, 36, 9, 39, 46, 38, 47, 34, 19, 36, 52, 45, 40, 42, 35, 38, 48, 62, 54, 51, 61, 53, 55, 66, 57, 44, 59, 64, 32, 49, 60,
  29, 52, 76, 37, 32, 71, 43, 70, 47, 75, 73, 80, 43, 79, 56, 72, 84, 61, 86, 68, 81, 90, 69, 92, 72, 85, 63, 96, 89, 87, 91, 83, 101, 94, 103, 65, 97, 106, 99, 108, 50, 74, 111, 77, 66, 98, 81, 70,
  93, 118, 117, 88, 33, 122, 116, 58, 127, 62, 127, 78, 114, 123, 100, 133, 95, 112, 105, 104, 132, 145, 87, 134, 130, 129, 137, 131, 82, 79, 148, 151, 150, 144, 153, 159, 102, 135, 121, 156, 159,
  125, 75, 162, 113, 158, 124, 109, 126, 149, 67, 142, 146, 166, 155, 158, 174, 171, 140, 119, 128, 175, 120, 138, 152, 161, 174, 181, 139, 154, 141, 187, 143, 176, 165, 172, 167, 191, 164, 182, 194,
  184, 136, 170, 193, 147, 86,
]; // 기대값

const result = solution2(msg);

console.log(result);
