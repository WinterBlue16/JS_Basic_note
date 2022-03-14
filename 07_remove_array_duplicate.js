const numberList = [1,2,3,3,4,5,5,5,4,8,9];

const newNumberList = numberList.filter((element, index, target) => {
    return target.indexOf(element) === index;
});

console.log(newNumberList);