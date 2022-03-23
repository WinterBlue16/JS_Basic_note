const sampleString = "https://www.naver.com";
const sampleStringKorean = "안녕 javascript!";

// 한글 검사
const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
console.log(korean.test(sampleString)); //false
console.log(korean.test(sampleStringKorean)); //true