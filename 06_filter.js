// array
const array = [1, 2, 3, 4, 5];
const resultOne = array.filter(element => element > 3);
const resultTwo = array.filter(element => element <= 3);
console.log(resultOne);
console.log(resultTwo);

// object
let sampleObject = [
    {name: "John", age:13},
    {name: "Jane", age:22},
    {name: "Tom", age:30},
    {name: "Don", age:60}
];

console.log(sampleObject.filter(person => person.age < 15)); 
console.log(sampleObject.filter(person => person.age >= 20 && person.age <= 30)); 
console.log(sampleObject.filter(person => person.age > 50)); 
