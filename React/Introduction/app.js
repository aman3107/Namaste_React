// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);
// console.log(parent);
// root.render(parent);
// root.render(heading);
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "chil2" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ]),
]);

root.render(parent);
