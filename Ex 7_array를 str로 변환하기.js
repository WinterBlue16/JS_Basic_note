// array를 다시 string으로 만들기

// 1. array 생성하기
var example_array = new Array('j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't');

// 2. toString(); 사용하기
var array_to_str1 = example_array.toString();

// toString으로 array를 string으로 만들 수 있긴 하지만,
// "'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'" 이런 모양의 커다란 str 하나만 나오게 된다.
// 따로 떨어진 item들을 하나로 붙여 str로 만들려면 어떤 함수를 써야 할까?

// 3. join 사용하기
var array_to_str2 = example_array.join("");
// 공백을 넣지 않았기 때문에 따로따로 떨어져 있던 item들이 'javascript'라는 하나의 string이 된다.
