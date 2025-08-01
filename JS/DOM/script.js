// Intro to DOM
// const el = document.getElementById("element-below-input");
// console.log(el);
// const el1 = document.getElementsByTagName("h2");
// console.log(el1);
// const el2 = document.getElementsByClassName("test");
// console.log(el2);

// const el3 = document.querySelectorAll("h3.test");
// console.log(el3);

// //

// const el5 = document.querySelector("#heading");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   alert("You click button");
//   console.log("Hello");
// });

// console.log(button.getBoundingClientRect());
// console.log(button.hasAttribute("type"));
// console.log(button.removeAttribute("type"));
// console.log(button.hasAttribute("type"));

// // Working with Classes

// const menuClick = (currEl) => {
//   const menuItems = document.querySelectorAll(".menu-item");
//   for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].classList.remove("active");
//   }
//   currEl.classList.add("active");
// };

// Creating traversing and removing nodes
const el = document.createElement("h1");
const body = document.querySelector("body");
body.appendChild(el);
el.innerText = "Hello World";

const subjects = document.querySelector(".subjects");
console.log(subjects.firstElementChild); // prints first element of list
console.log(subjects.lastElementChild); // prints last element of list
const favSub = document.querySelector(".fav-subject");
console.log(favSub.previousElementSibling); // prints element before favorite subject.
console.log(favSub.nextElementSibling); // prints element after favorite subject
console.log(favSub.parentElement); //prints parent of favorite subject i.e entire list

favSub.remove(); // removes element from DOM
