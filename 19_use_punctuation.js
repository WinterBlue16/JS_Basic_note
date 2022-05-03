sampleObject = {};
sampleObject['a'] = 1;
sampleObject['b'] = 2;

console.log(sampleObject);

// 새로운 object
newObject = sampleObject;
newObject.a = 3;
console.log(newObject);
console.log(sampleObject); // 원본까지 함께 변경

// 원본과 상관없이 변경
newObject = {...sampleObject};
newObject.a = 5;
console.log(newObject);
console.log(sampleObject); // 원본은 변경되지 않음