const digit1 = "1";
const digit2 = "12";
const digit3 = "123";

console.log(digit3.match(/[0-9]/)); // match // 가장 앞자리 한 글자만
console.log(digit3.match(/[0-9][0-9]/)); // match // 가장 앞자리 두 글자만
console.log(digit3.match(/[0-9][0-9][0-9]/)); // match
console.log(digit3.match(/\d{1,3}/)); // match //set digit(1~3)
