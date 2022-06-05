const sampleString = "Agatha";

function startwithA(string) {
  return /^A/.test(string);
}

function doesNotStartwithA(string) {
  return !/^A/.test(string);
}

// function doesNotStartwithA(string) {
//   return /^[^A]/.test(string);
// }

console.log(startwithA(sampleString));
console.log(doesNotStartwithA(sampleString));
