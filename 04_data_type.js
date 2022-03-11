// 상수(변하지 않음)
const x = 10;
console.log(typeof x);

// x = 1
// console.log(x); // TypeError: Assignment to constant variable.

// 변수
let y = 10;
y = 12;
console.log(typeof y);

// 배열(list와 비슷한 개념)
array = [1,2,3,4,5,6,7,8,9,10];
console.log(typeof array);
console.log(array[0]); // 인덱싱 가능 // -1로는 인덱싱 불가능(undefined)

// 오브젝트(dictionary와 비슷한 개념)
object = {"name" : "winter", "job": "developer"};
console.log(typeof object);
console.log(object['name']);
console.log(object['job']);
console.log(Object.keys(object));
console.log(Object.values(object));