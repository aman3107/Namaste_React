import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX

// React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// 1. Class Based Component
// 2. Functional Component

//  React Functional Component

const Title = () => {
  return <h1>This is title</h1>;
};

const num = 100;

const Heading = () => {
  return (
    <div id="heading">
      <Title />
      {jsxHeading}
      <h2>{"hello"}</h2>

      <h1>Hello World</h1>
      <h1>How Are you</h1>
    </div>
  );
};

console.log(jsxHeading);
console.log(Heading);
root.render(jsxHeading);
console.log(Title);
root.render(<Heading />);
