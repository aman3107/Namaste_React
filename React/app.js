import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX

const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);
console.log(jsxHeading);
root.render(jsxHeading);
