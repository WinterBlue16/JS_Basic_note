const array1 = ['a', 'b'];
const array2 = [1,2];

result = [];
array1.forEach((key, value) => result[key] = array2[value]);
console.log(result);
