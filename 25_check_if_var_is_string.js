// check string
function myFunction(name) {
  if (typeof name === "string") {
    console.log(`${name} is a string!`);
  } else {
    console.log(`${name} is not a string!`);
  }
}

myFunction("junho");
myFunction(["junho", "eunha"]);
