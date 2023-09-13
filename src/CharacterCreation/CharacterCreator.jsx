import React, { useState } from "react";
import PersonalPage from "./PersonalPage";
import CharacteristicPage from "./CharacteristicPage";

function CharacterCreator() {
  const [character, setCharacter] = useState({
    personalDetails: null,
    characteristics: null,
    skills: null,
    weapons: {},
    armor: {},
  });
  const [page, setPage] = useState(0);

  const setCharacterData = (pageData, step) => {
    setCharacter((prevState) => ({
      ...prevState,
      [step]: pageData,
    }));
    setPage(page + 1);
  };

  switch (page) {
    case 0:
      return <PersonalPage submitPersonalData={setCharacterData} />;
    case 1:
      var race = character.personalDetails?.race;
      return (
        <CharacteristicPage
          race={race}
          submitCharacteristicData={setCharacterData}
        />
      );
    default:
      return null;
  }
}

export default CharacterCreator;
