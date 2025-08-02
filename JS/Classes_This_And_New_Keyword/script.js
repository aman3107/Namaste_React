// new keyword

const person = {};
const person1 = new Object();

person.firstName = "Jon";
person1.firstName = "Jon";
console.log(person, person1);

const myDate = new Date();
console.log(myDate.getHours());

// this keyword

function Sentence(words) {
  this.words = words;
  console.log(this);
}
const firstString = new Sentence("Hello");
console.log(firstString);

const person2 = {
  name: "Jon",
  getName() {
    console.log(this);
  },
};

person2.getName();

// Classes

class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

const user = new Person("Jon", 24, true);
console.log(user);

const createPerson = (name, age, isWorking) => ({ name, age, isWorking });
const user1 = createPerson("Kat", 20, false);
const user2 = createPerson("Kati", 20, false);

console.log(user1);
console.log(user2);
