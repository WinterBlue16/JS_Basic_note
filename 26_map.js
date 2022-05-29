const sampleArray = [1, 2, 3, 4, 5];

// example
sampleArray.map((item) => console.log(item));

// example
newArray = [];
sampleArray.map((item) => {
  newArray.push(item * 2);
  console.log(`새로운 item이 추가되었습니다!`);
});
console.log(newArray);
