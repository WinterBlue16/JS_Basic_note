// 웹페이지를 만드는 와중에 3초 후, 5초 후 자동으로 버튼이 눌려 페이지가 넘어갔으면 좋겠다, 고 생각하는 때가 있다.
// 그럴 때는 setTimeout함수를 활용할 수 있다.

// 기본형
setTimeout(function(){
  document.getElementById('버튼 아이디').click();
}, 지정하고 싶은 시간(초)*1000); // 지정하고 싶은 시간(초) * 1000의 숫자를 뒤에 붙인다

// 예시 button id='clickme'
setTimeout(function(){
  document.getElementById('clickme').click();
}, 3000) // 3초 후 clickme라는 id를 가진 버튼 클릭
