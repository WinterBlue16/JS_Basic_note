const x = 10;

// 간단한 if else문
if (x > 0) {
  console.log(`0보다 큰 수입니다.`);
} else {
  console.log(`0보다 작은 수입니다.`);
}

// if else shorthand
const y = x > 0 ? x : null;
console.log(y); // 5

// if else shorthand advanced
const z = x > 0 ? 1 : 0;
console.log(z); // 1

// if else shorthand(and)
const n = x > 0 && x <= 5 ? 1 : 0;
console.log(n);

// if else shorthand(or)
const m = (x > 0) | (x <= 5) ? 1 : 0;
console.log(m);
