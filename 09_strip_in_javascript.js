let sampleString = "     Hello javascript!     ";

// strip
function trim(params) {
  return params.replace(/^\s+|\s+$/gm, "");
}

console.log(trim(sampleString));

// lstrip
function ltrim(params) {
  return params.replace(/^\s+/gm, "");
}

console.log(ltrim(sampleString));

// rstrip
function rtrim(params) {
  return params.replace(/\s+$/gm, "");
}

console.log(rtrim(sampleString));

// array elememts strip
const sampleArray = ["  a", "b   ", "   c "];
stripSampleArray = sampleArray.map((element) => element.trim());
console.log(stripSampleArray);

// array 내 string이 아닌 값이 존재할 경우 TypeError 발생
const sampleArray2 = ["a  ", 1, "  b  "];
try {
  stripSampleArray2 = sampleArray2.map((element) => element.trim());
} catch (e) {
  console.log("error!");
  console.log(e);
}
