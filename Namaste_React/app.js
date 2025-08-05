import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h1 tag"),
  ]),
  React.createElement("div", { id: "chil2" }, [
    React.createElement("h1", { id: "heading1" }, "I am hello tag"),
    React.createElement("h2", { id: "heading2" }, "I am hello tag"),
  ]),
]);

root.render(parent);
console.log("hello");
