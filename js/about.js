// 타이핑 효과를 생성하는 함수
function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    // 문자 한 글자씩 출력
    if (text.substring(i, i + 8) === "프론트엔드 개발자") {
      document.getElementById("textContainer").innerHTML += "<span class='highlight'>" + text.substring(i, i + 8) +
        "</span>";
      i += 7; // "프론트엔드 개발자"의 길이는 8이므로 인덱스 조정
    } else if (text.substring(i, i + 3) === "고성호") {
      document.getElementById("textContainer").innerHTML += "<span class='highlight'>" + text.substring(i, i + 3) +
        "</span>";
      i += 2; // "고성호"의 길이는 3이므로 인덱스 조정
    } else {
      document.getElementById("textContainer").innerHTML += text.charAt(i);
    }
    i++;
    // 다음 글자 출력 전 지연 시간 설정 (100ms)
    setTimeout(function () {
      typeWriter(text, i, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    // 텍스트 모두 출력 후 실행될 함수
    setTimeout(fnCallback, 700);
  }
}
// 타이핑할 텍스트
let textToType = `안녕하세요\n프론트엔드 개발자를\n꿈꾸는 고성호입니다.`;
// 타이핑 효과 시작 및 반복
function startTyping() {
  typeWriter(textToType, 0, function () {
    // 타이핑이 끝나면 다시 처음부터 타이핑 시작
    document.getElementById("textContainer").innerHTML = ''; // 텍스트 클리어
    startTyping(); // 다시 타이핑 시작
  });
}
// 초기에 타이핑 시작
startTyping();