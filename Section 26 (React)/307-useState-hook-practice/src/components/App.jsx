import React from "react";

function App() {
  var [time,getTime]=React.useState(new Date().toLocaleTimeString().replace(/AM|PM/,''))

  function gTime(){
    getTime(new Date().toLocaleTimeString().replace(/AM|PM/,''));
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(gTime,1000)}>Get Time</button>
    </div>
  );
}

export default App;
