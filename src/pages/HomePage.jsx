// src/components/HomePagePage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import Button from "react-bootstrap/Button";
import { newCharacterPersonalDetails } from "../DataTemplates/PersonalData";
import { CreateCharacter, FetchCharacters } from "../FirebaseCommunications";
import { TestingCharacter1, TestingCharacter2 } from "../TestingData";
import { setCharacters } from "../reducers/characterReducer";

function HomePage() {
  const [characters, setCharacters] = useState(
    useSelector((state) => state.characters)
  );
  const player = useSelector((state) => state.currentPlayer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const characterSelected = (character) => {
    dispatch(setCurrentCharacter(character));
    navigate("/character-sheet");
  };

  async function fetchData() {
    try {
      const fetchedCharacters = await FetchCharacters(player);

      // The characters data is available here
      console.log(fetchedCharacters);
      setCharacters(fetchedCharacters);
    } catch (error) {
      // Handle any errors that may occur during the fetch.
      console.error(error);
    }
  }

  if (Object.keys(characters).length === 0) {
    fetchData();
  }

  const createNewCharacter = () => {
    dispatch(
      setCurrentCharacter({
        personalDetails: newCharacterPersonalDetails,
        characteristics: null,
        skills: null,
        weapons: {},
        armor: {},
        magicActivated: false,
      })
    );
    navigate("/character-creator");
  };

  return (
    <div>
      <h1>{`${player}'s Home Page`}</h1>
      {Object.keys(characters).map((character, i) => (
        <div key={i}>
          <Button
            key={i}
            onClick={() => characterSelected(characters[character])}
          >
            {characters[character].personalDetails.characterName}
          </Button>
        </div>
      ))}
      <Button onClick={createNewCharacter}>Create New Character</Button>
    </div>
  );
}

export default HomePage;
