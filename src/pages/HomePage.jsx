// src/components/HomePagePage.js
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const characters = useSelector((state) => state.characters.characters);
  const player = useSelector((state) => state.currentPlayer.currentPlayer);
  const navigate = useNavigate();

  const characterSelected = (element) => {};

  return (
    <div>
      <h1>{`${player}'s Home Page`}</h1>
    </div>
  );
}

export default HomePage;
