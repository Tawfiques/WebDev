import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function update(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return { fName: value, lName: prev.lName, email: prev.email };
      } else if (name === "lName") {
        return { fName: prev.fName, lName: value, email: prev.email };
      } else if (name === "email") {
        return { fName: prev.fName, lName: prev.lName, email: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={update} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={update} value={contact.lName}/>
        <input name="email" placeholder="Email" onChange={update} value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
