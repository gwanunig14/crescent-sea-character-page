import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import { addCharacter } from "../reducers/characterReducer";
import Button from "react-bootstrap/Button";
import PersonalCreator from "../CharacterCreator/PersonalCreator";
import StatisticCreator from "../CharacterCreator/StatisticCreator";
import CharacterSheet from "../CharacterManagement/CharacterSheet";
import { makeMutableCopy } from "../Tools/ReusableFunctions";

function CharacterCreator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const character = useSelector((state) => state.currentCharacter);

  const [page, setPage] = useState(1);

  const setCharacterData = (data, section) => {
    let newCharacterData = makeMutableCopy(character);
    newCharacterData[section] = data;
    dispatch(setCurrentCharacter(newCharacterData));
  };

  const createCharacter = () => {
    dispatch(addCharacter(character));
    navigate("/home-page");
  };

  switch (page) {
    case 0:
      return <PersonalCreator submitPersonalData={setCharacterData} />;
    case 1:
      const race = character.personalDetails?.race;
      return (
        <StatisticCreator
          race={race}
          submitCharacteristicData={setCharacterData}
        />
      );
    case 2:
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
