import React from "react";

function App() {

  const [name,Setname]=React.useState("");
  const [showname,Setshowname]=React.useState(false);

  function userInput(event){
    Setname(event.target.value);
  }

  function submitted(){
    Setshowname(true);
  }

  return (
    <div className="container">
      <h1>Hello {showname&&name}</h1>
      <input type="text" placeholder="What's your name?" onChange={userInput} value={name} />
      <button onClick={submitted}>Submit</button>
    </div>
  );
}

export default App;
