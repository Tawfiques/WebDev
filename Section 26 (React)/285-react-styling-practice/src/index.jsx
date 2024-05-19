//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom";
var date = new Date().getHours();
var customCss = {
  color: "black",
};
var greet = "Morning";

if (date >= 0 && date < 12) {
  customCss.color = "red";
  greet = "Morning";
} else if (date >= 12 && date < 18) {
  customCss.color = "green";
  greet = "Afternoon";
} else if (date >= 18 && date < 24) {
  customCss.color = "blue";
  greet = "Evening";
}

ReactDOM.render(
  <h1 style={customCss}>Good {greet}</h1>,
  document.getElementById("root")
);
