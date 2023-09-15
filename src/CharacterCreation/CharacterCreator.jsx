import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import { addCharacter } from "../reducers/characterReducer";
import Button from "react-bootstrap/Button";
import PersonalPage from "./PersonalPage";
import CharacteristicPage from "./CharacteristicPage";
import SkillPage from "./SkillPage";
import CharacterSheet from "../CharacterManagement/CharacterSheet";
import { makeMutableCopy } from "../Tools/ReusableFunctions";

function CharacterCreator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const character = useSelector((state) => state.currentCharacter);

  const [page, setPage] = useState(0);

  const setCharacterData = (data, section, navigationAction) => {
    let newCharacterData = makeMutableCopy(character);
    newCharacterData[section] = data;
    dispatch(setCurrentCharacter(newCharacterData));

    if (navigationAction === "plus") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  const createCharacter = () => {
    dispatch(addCharacter(character));
    navigate("/home-page");
  };

  switch (page) {
    case 0:
      return <PersonalPage submitPersonalData={setCharacterData} />;
    case 1:
      const race = character.personalDetails?.race;
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
    case 4:
      return (
        <div>
          <CharacterSheet confirmation={true} />
          <Button onClick={() => setPage(page - 1)}>Back</Button>
          <Button onClick={createCharacter}>Confirm character?</Button>
        </div>
      );
    default:
      return null;
  }
}

export default CharacterCreator;
