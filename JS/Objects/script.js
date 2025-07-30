const person = {
  firstName: "Tom",
  lastName: "Cruise",
  age: 35,
  car: {
    brand: "Toyota",
    year: 2015,
  },
};

// DOT Notation
// person.dog = { name: "Tommy", breed: "German" };
console.log(person.firstName);
console.log(person);

// Square Bracket Notation
const property = "age";
console.log(person["firstName"]);
console.log(person[property]);

// built in methods

const dog = {
  name: "Fluffy",
  age: 2,
  listAllProporties: function () {
    console.log(this.name, this.age);
  },
};

dog.listAllProporties();

// Methods

// Object.keys()

const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

const positions = Object.keys(employees);
console.log(positions);

// Object.values()
const names = Object.values(employees);
console.log(names);

// Object.entries()

const entries = Object.entries(employees);
console.log(entries);
entries.forEach((entry) => console.log(entry[0], entry[1]));

// Object.freeze()

const user = {
  username: "user",
  password: "12345",
};

const userName = Object.freeze(user);
user.username = "test";
user.password = "1234556789";
console.log(user);
console.log(userName);

//  Object.seal()

const user1 = {
  username: "user",
  password: "12345",
};

const userName1 = Object.seal(user1);
userName1.username = "test";
console.log(userName1);
