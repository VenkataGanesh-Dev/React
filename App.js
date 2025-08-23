import React, { createElement } from "react"; // THIS REACT CAME FROM THE NODE MODULES
import ReactDOM from "react-dom/client"; // THIS REACTDOM CAME FROM THE NODE MODULES

// /*
//  <div id="parent">
//     <div id="child">  // nested elements
//       <h1>Namaste react</h1>
//       <h2>iam h2 tag</h2>
//     </div>
//     div id="child2">
//       <h1>iam h1 tag</h1>
//       <h2>iam h2 tag</h2>
//     </div>
//   </div>
// */

// // This react element is an object that converts into the (HTML) that is understand by the browser

// // This is the core way to write the code

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { key: "h1-child1" }, "namaste reactjs"),
//     React.createElement("h2", { key: "h2-child1" }, "iam h2 tag")
//   ]),

//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1-child2" }, "iam h1 tag"),
//     React.createElement("h2", { key: "h2-child2" }, "iam h2 tag"),
//   ]),
// ]);
// {/* <div id='parent'>
//   <div></div>
// </div> */}

//   console.log(parent);

//   const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(parent)

//   // --NOTE--
//   // In React, "appended" refers to the concept of adding new elements
//   // In React, "render" refers to the process of displaying a component's user interface (UI) on the screen.

// /*

// // hello world program using React
//   const heading = React.createElement(
//     "h1",
//     { id : "heading"},
//     "hello world from react!");

//     console.log(heading); // it will return the object

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   // in this root where all the code will run

//   root.render(heading);

//   */

// ---------------EPISODE-2 (BASICS OF REACT)----------------

//  React.createElement => js-obj =>when we render this obj on dom => it converts into HTML

// React.createElement => ReactElement(js-obj) => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   {id: "heading"},
//   "This is h1 tag"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//  ---JSX---

// JSX(by parcel having the babel pacakage it is coverted into REACT.creaateElement) => React.createElement => ReactElement(js-obj) => HTMLElement(render)

// const jsxHeading = <h1 id="heading">React using JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// const jsxHeading = (
//   <h1 className="heading" tabIndex="5">
//     React using JSX
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


// -----React component----
// 1) class based component(old way)
// 2) functional component(New way)


// functional component-

const fn = (a,b) => {a*b};
                                 // both are same 
const fn1 = (a,b) => {
  return a*b;
}

const Heading1 = ()=> {
  return <h1>React Functional Component </h1>
}