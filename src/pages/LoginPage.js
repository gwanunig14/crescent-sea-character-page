// src/components/LoginPage.js
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Choose an option:</p>
      <Link to="/existing-character">Go to Existing Character</Link>
      <br />
      <Link to="/add-character">Add a New Character</Link>
    </div>
  );
}

export default LoginPage;
