const sample_only_number = "12";
const sample_only_text = "winter";
const sample_mixed = "winter12";

// only number
console.log(sample_only_number.match(/^[0-9]+$/)); // not null
console.log(sample_only_text.match(/^[0-9]+$/)); // null
console.log(sample_mixed.match(/^[0-9]+$/)); // null

// only string
console.log(sample_only_text.match(/^[a-zA-Z]+$/)); // not null
console.log(sample_only_number.match(/^[a-zA-Z]+$/)); // null
console.log(sample_mixed.match(/^[a-zA-Z]+$/)); // null

// startwith
console.log(sample_only_text.match(/^w/)); // not null
console.log(sample_only_text.match(/^1/)); // not null

// endwith
console.log(sample_mixed.match(/2$/)); // not null
console.log(sample_only_text.match(/r$/)); // not null
