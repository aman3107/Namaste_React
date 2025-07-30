const months = ["January", "February", "March", "April"];
console.log(months);
console.log(months[0]);
months.push("May");
console.log(months);

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// Arrys Methods

const names = ["Jon", "Bob", "David", "Mark"];

names.push("Aman");
console.log(names);

console.log(names.pop());
console.log(names);

names.shift();
console.log(names);

names.unshift("Aman");
console.log(names);

names.splice(2, 0, "Jenny", "Jonny");
console.log(names);

const noOneLikesJohn = names.slice(1);

console.log(noOneLikesJohn);

// Arrat forEach

names.forEach((name, i) => {
  console.log(name);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((num, i) => (sum += num));
console.log(sum);

// Array Map

const inventory = [
  {
    price: 5,
    items: "eggs",
  },
  {
    price: 4,
    items: "ham",
  },
  {
    price: 3,
    items: "mayo",
  },
];

// Array Filter

const prices = inventory.map((item, i) => item.price);
console.log(prices);
const items = inventory.map((item, i) => item.items);
console.log(items);

let numbers1 = [-10, 0, -5, 2, -9, 3, -7, 5];

const positive = numbers1.filter((num, i) => num >= 0);
console.log(positive);

const employeesData = [
  { name: "Sebestian", overtime: 5 },
  { name: "Cardi Vee", overtime: 10 },
  { name: "George Lopez", overtime: 12 },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);
const employeeName = employeesToReward.map((employee) => employee.name);
console.log(employeesToReward);
console.log(employeeName);

// Array Find

const value = numbers.find((num) => num > 5);
console.log(value);

// Array includes

const array1 = [1, 2, 3];
console.log(array1.includes("3"));

// Array Sort

const names1 = ["Bob", "Amy", "DJ", "Cummins"];
names1.sort();
console.log(names1);

numbers.sort((a, b) => b - a);
console.log(numbers);

//  Array some and every

const array2 = [1, 2, 3, 4, 5];
console.log(array2.some((el) => el > 3));
console.log(array2.every((el) => el > 3));

// Array Reduce

const groceryList = [29, 12, 45, 35, 87, 110];
const ans = groceryList.reduce((acc, curr) => acc + curr, 0);
console.log(ans);
