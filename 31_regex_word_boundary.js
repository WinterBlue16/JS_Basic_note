const textWithWordBoundary = "\bhello world!";
const textWithoutWordBoundary = "hello world!";

console.log(textWithoutWordBoundary.match(/^hello/)); //match
console.log(textWithWordBoundary.match(/^hello/)); //null

console.log(textWithoutWordBoundary.match(/\b[a-z][a-z][a-z][a-z][a-z]/)); //match
