// JavaScript의 조건문을 배워본다

// 샘플 만들기
var language = ['python', 'JavaScript', 'R', 'SQL', 'Ruby'];
var lang = randomItem(language);
function randomItem(a) { return a[Math.floor(Math.random() * a.length)]; }

// 조건문 만들기
if (lang.length < 5){ // 길이가 5보다 작을 경우
  lang.toString(); // tostring
} else { // 5보다 클 경우
  lang.join(""); // join
}
