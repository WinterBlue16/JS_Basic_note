sampleObject = {};
sampleObject["a"] = 1;
sampleObject["b"] = 2;

// value의 조건에 따라 값을 변경
Object.keys(sampleObject).forEach((key) => {
  if (sampleObject[key] >= 1) {
    sampleObject[key] = "ONE";
  }
});

console.log(sampleObject);
