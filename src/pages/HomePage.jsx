// src/components/HomePagePage.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import Button from "react-bootstrap/Button";

function HomePage() {
  const characters = useSelector((state) => state.characters);
  const player = useSelector((state) => state.currentPlayer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const characterSelected = (character) => {
    dispatch(setCurrentCharacter(character));
    navigate("/character-sheet");
  };

  return (
    <div>
      <h1>{`${player}'s Home Page`}</h1>
      {characters.map((character) => (
        <Button onClick={() => characterSelected(character)}>
          {character.personalDetails.characterName}
        </Button>
      ))}
      <Button>Create New Character</Button>
    </div>
  );
}

export default HomePage;
