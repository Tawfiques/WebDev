import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
