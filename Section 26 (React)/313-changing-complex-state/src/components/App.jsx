import React from "react";

function App() {
  const [Fullname, updateName] = React.useState({ fname: "", lname: "" });

  function handleName(event) {
    const {name, value} = event.target;
    updateName((prev) => {
      if (name === "fName") {
        return { fname: value, lname: prev.lname };
      } else if (name === "lName") return { fname: prev.fname, lname: value };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {Fullname.fname} {Fullname.lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={Fullname.fname}
          onChange={handleName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={Fullname.lname}
          onChange={handleName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
