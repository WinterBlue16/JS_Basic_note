// python에서 list를 인덱싱하듯, JavaScript에서도 배열을 인덱싱할 수 있다

// 1. 배열 생성
var example_array = [...'HelloJavaScript!']; // index(0~16)

// 2. 5번째 item만 잘라내기
var array_slice = example_array.slice(4, 5);

// 3. 첫번째부터 8번째 item까지만 잘라내기
var array_slice = example_array.slice(0, 9);

// 4. 7번째부터 맨 끝까지 잘라내기
var array_slice = example_array.slice(8);
