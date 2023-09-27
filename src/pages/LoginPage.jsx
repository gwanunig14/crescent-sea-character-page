// src/components/LoginPage.js
import React from "react";
import { CreateItems, FetchUser } from "../FirebaseCommunications";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPlayer } from "../reducers/currentPlayerReducer";
import { pushArmor, pushShields, pushSpells, pushWeapons } from "../PushData";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  CreateItems("weapons", pushWeapons);
  CreateItems("armor", pushArmor);
  CreateItems("shields", pushShields);
  CreateItems("powers", pushSpells);

  const handleEnterPressed = (event) => {
    if (event.key === "Enter") {
      FetchUser(event.target.value);
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
