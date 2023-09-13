import React, { useState } from "react";
import PersonalPage from "./PersonalPage";
import CharacteristicPage from "./CharacteristicPage";
import SkillPage from "./SkillPage";

function CharacterCreator() {
  // const [character, setCharacter] = useState({
  //   personalDetails: null,
  //   characteristics: null,
  //   skills: null,
  //   weapons: {},
  //   armor: {},
  // });

  const [character, setCharacter] = useState({
    personalDetails: { characterName: "Allen", race: "dwarf" },
    characteristics: {
      charisma: 13,
      dexterity: 10,
      strength: 10,
      constitution: 10,
      intelligence: 10,
      power: 10,
      education: 10,
    },
    skills: null,
    weapons: {},
    armor: {},
  });
  const [page, setPage] = useState(2);

  const setCharacterData = (pageData, step, func) => {
    setCharacter((prevState) => ({
      ...prevState,
      [step]: pageData,
    }));

    if (func === "plus") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
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
    case 2:
      return (
        <SkillPage
          character={character}
          maxSkillPoints={1132}
          submitSkillData={setCharacterData}
        />
      );
    case 3:
      return (
        <SkillPage
          character={character}
          maxSkillPoints={1232}
          submitSkillData={setCharacterData}
        />
      );
    default:
      return null;
  }
}

export default CharacterCreator;
