const sampleArray = [1, 2, 3, 4, 5];

// simple
sampleArray.forEach((item) => console.log(item));

// different from map
const newArray1 = sampleArray.forEach((item) => item + 1);
const newArray2 = sampleArray.map((item) => item + 1);

console.log(newArray1); // forEach => undefined
console.log(newArray2); // map => new array
