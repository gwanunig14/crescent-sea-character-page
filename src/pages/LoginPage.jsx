// src/components/LoginPage.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentPlayer } from "../reducers/currentPlayerReducer";

function LoginPage() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players);
  const navigate = useNavigate();

  const handleEnterPressed = (event) => {
    if (event.key === "Enter" && players.includes(event.target.value)) {
      dispatch(setCurrentPlayer(event.target.value));
      navigate("/home-page");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" onKeyDown={handleEnterPressed} />
    </div>
  );
}

export default LoginPage;
