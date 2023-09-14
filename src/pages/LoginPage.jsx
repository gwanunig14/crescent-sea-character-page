// src/components/LoginPage.js
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  // const handleEnterPressed = (event) => {
  //   if (event.key === "Enter") {
  //     setField(dataKey, event.target.value);
  //   }
  // };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" onKeyDown={handleEnterPressed} />
      {/* <p>Choose an option:</p>
      <Link to="/existing-character">Go to Existing Character</Link>
      <br />
      <Link to="/add-character">Add a New Character</Link> */}
    </div>
  );
}

export default LoginPage;
