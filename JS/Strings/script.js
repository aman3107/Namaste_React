const double = "Hello";
const backTick = `Hello ${2 + 2}`;

console.log(double);
console.log(backTick);

const sum = (a, b) => a + b;

const result = `This is a sum ${sum(2, 10)}`;
console.log(result);

// String length and basic properties
const fName = "aman";
const len = fName.length;
console.log(len);

const fLetter = fName[0];
const lLetter = fName[len - 1];
console.log(fLetter, lLetter);
console.log(fName[0]);

// UpperCase and LowerCase

const mixedCaseString = "Hello! How Are You";

const lowerCaseString = mixedCaseString.toLowerCase();
const upperCaseString = mixedCaseString.toUpperCase();

console.log(lowerCaseString, upperCaseString);

// Searching for a substring

const hobbies = "I Love HTML, CSS and Javascript Love";

// indexOf
const firstIndex = hobbies.indexOf("Love");
// lastIndexOf
const lastIndex = hobbies.lastIndexOf("Love");

console.log(firstIndex, lastIndex);

// includes()

const includesHobbies = hobbies.includes("HTML");
console.log(includesHobbies);

// startsWith, endsWith

console.log(hobbies.startsWith("I"));
console.log(hobbies.endsWith("e"));

// Getting for a  substring

const example = "hotdog";
const dog = example.slice(3, 6);

console.log(dog);

// split
const exampleString = "dog";
console.log(exampleString.split(""));

const test = "The quick brown fox jumps over the lazy dog";
const words = test.split(" ");
console.log(words);

// Reverse, repeat and  trim a string

const test1 = "test";
const revesedString = test1.split("").reverse().join("");
console.log(revesedString);
console.log(test1);

const dogSays = "woof";
console.log(dogSays.repeat(5));

const example1 = "hello, World!   ";
console.log(example1.trim());

// exercise

const guestList = "Our guests are: emma, jacob, isabella, ethan";

const length1 = guestList.length;
console.log(length1);

const upperCaseGuestList = guestList.toUpperCase();
console.log(upperCaseGuestList);

const isEthanOnTheList = guestList.includes("ethan");
console.log(isEthanOnTheList);

const substringGuests = guestList.substring(16).toUpperCase();
console.log(substringGuests);

const guests = substringGuests.split(",");
console.log(guests);
