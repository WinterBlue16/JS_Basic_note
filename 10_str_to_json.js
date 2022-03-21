
let sampleObject = {};
sampleObject.id = 1;
sampleObject.name = 'Kerry';
sampleObject.tall = 145;

// json 변환 전
console.log(sampleObject);
console.log(typeof sampleObject);

// json 변환 후
console.log(JSON.stringify(sampleObject));
console.log(typeof JSON.stringify(sampleObject));