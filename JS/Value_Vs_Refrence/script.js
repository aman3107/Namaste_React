/*
let x = 1;
let y = x;
x = 2;
console.log(x, y);

let firstPerson = "Mark";
let secondPerson = firstPerson;

firstPerson = "Oscar";
console.log(firstPerson, secondPerson);

const dogs = ["dogs", "cats"];
const otherAnimals = dogs;
dogs.push("cow");
console.log(dogs, otherAnimals);

const person = {
  firstName: "Jon",
  lastName: "Snow",
};

const otherPerson = person;
person.firstName = "John";
console.log(person, otherPerson);
*/
// Cloning Arrays

/*
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];
numbers.push(10);
console.log(numbers, newNumbers);

const newNumbers1 = numbers.slice();
numbers.push(6);
console.log(numbers, newNumbers1);
*/

// Deep Cloning

const person = {
  firstName: "Emma",
  car: {
    brand: "bmw",
    color: "blue",
    wheels: 4,
  },
};

const newPerson = JSON.parse(JSON.stringify(person));
newPerson.car.color = "red";
console.log(person, newPerson);
