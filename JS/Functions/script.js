console.log("hello world");

// Function Declaration
function square(number) {
  return number * number;
}
console.log(square(2));

// Function Expression

const name = function (x) {
  return x * x;
};

console.log(name(10));

// Arrow Functions

const square1 = (x) => {
  return x * x;
};

const square2 = (x) => x * x;
const hi = (x) => console.log(x);

console.log(square1(10));
console.log(square2(10));
console.log(hi("aman"));

const sayHi = (name) => {
  console.log(`Hi, ${name}`);
};

sayHi("aman");

const add = (a, b) => {
  console.log(a + b);
};

const sum = add(2, 3);
console.log(sum);
