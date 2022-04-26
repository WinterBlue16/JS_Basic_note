const keys = ['a', 'b'];
const values = [1,2];

// 방법 1
result = {};
keys.forEach((key, value) => result[key] = values[value]);
console.log(result);

// 방법 2
result = Object.assign(...keys.map((key, value) => ({[key]:values[value]})))
console.log(result);

// 방법 3
result = keys.reduce((object, key, value) => ({...object, [key]:values[value]}), {})
console.log(result);

// 방법 4
console.log(Object.fromEntries(keys.map((_, i) => [keys[i], values[i]])))