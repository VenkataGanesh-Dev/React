/*
 <div id="parent">
    <div id="child">  // nested elements
      <h1>iam h1 tag</h1>
      <h2>iam h2 tag</h2>
    </div>
    div id="child2"> 
      <h1>iam h1 tag</h1>
      <h2>iam h2 tag</h2>
    </div>
  </div>
*/

// This react element is an object that converts into the (HTML) that is understand by the browser

// This is the core way to write the code

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div", { id: "child" },[
      React.createElement("h1",{},"iam h1 tag"),
      React.createElement("h2",{},"iam h2 tag")
    ]),

    React.createElement("div", { id: "child2" },[   // If the elements have multiple elements e have to use [] and pass 
      React.createElement("h1",{},"iam h1 tag"),    // the elements as  lists
      React.createElement("h2",{},"iam h2 tag"),
    ]),
  ]);

  console.log(parent); 
    
  const root = ReactDOM.createRoot(document.getElementById("root")); 

  root.render(parent)

  // --NOTE-- 
  // In React, "appended" refers to the concept of adding new elements 
  // In React, "render" refers to the process of displaying a component's user interface (UI) on the screen. 


/*

// hello world program using React
  const heading = React.createElement(
    "h1", 
    { id : "heading"}, 
    "hello world from react!");

    console.log(heading); // it will return the object
    

  const root = ReactDOM.createRoot(document.getElementById("root")); 
  // in this root where all the code will run

  root.render(heading);

  */


  // hello suriya