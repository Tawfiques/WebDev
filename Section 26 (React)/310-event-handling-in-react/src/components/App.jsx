import React from "react";

function App() {
  
  const [text,setText]=React.useState("Hello")
  function submitted(){
    setText("Submitted");
  }
  const [customButtonColor,SetcustomButtonColor]=React.useState("white")
  function mouseOver(){
    SetcustomButtonColor("black")
  }
  function mouseOut(){
    SetcustomButtonColor("white")
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:customButtonColor}} onClick={submitted} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}

export default App;
