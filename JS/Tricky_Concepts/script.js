// Global Scope
const name = "john";

const logName = () => console.log(name);

console.log(name);

// Local  scope

const someFunction = () => {
  let a = 10;
  const name = "aman";
  console.log(a);
};

someFunction();
// console.log(a);

// Block Scope

if (true) {
  let a = 10;
  console.log(a);
}

// Hoisting

console.log(age);
var age = 20;

hoist();

function hoist() {
  console.log("Hello");
}

// Closures

const outer = () => {
  const outerVar = "hello";
  // console.log(outerVar);

  const inner = () => {
    const innerVar = "Hi!";
    console.log(`${outerVar}, ${innerVar}`);
  };
  return inner;
};
const innerFn = outer();
console.log(innerFn);
innerFn();
// outer();
// console.log(outerVar);

const init = () => {
  const hobby = "learning javascript";
  const displayHobby = () => {
    console.log(hobby);
  };
  return displayHobby;
};

const fn = init();
console.log(fn);
fn();
