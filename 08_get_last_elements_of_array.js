let sampleArray = [];

sampleArray.push(1);
sampleArray.push(2);
sampleArray.push(3);
sampleArray.push(4);
sampleArray.push(5);

console.log(sampleArray[sampleArray.length-1]);

// refactoring
for (let i = 1; i < 6 ; i++) {
    sampleArray.push(i)
}
console.log(sampleArray[sampleArray.length-1]);