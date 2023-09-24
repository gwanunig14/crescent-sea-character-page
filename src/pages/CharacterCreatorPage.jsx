import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import Button from "react-bootstrap/Button";
import PersonalCreator from "../CharacterCreator/PersonalCreator";
import StatisticCreator from "../CharacterCreator/Statistics/StatisticCreator";
import CharacterSheet from "../CharacterManagement/CharacterSheet";
import { makeMutableCopy } from "../Tools/ReusableFunctions";
import { CreateCharacter } from "../FirebaseCommunications";
import {
  startingDwarfWeapons,
  startingElfWeapons,
  startingHumanWeapons,
} from "../DataTemplates/Items/Weapons";
import {
  newDwarfCharacteristics,
  newElfCharacteristics,
  newHumanCharacteristics,
} from "../DataTemplates/CharacteristicData";
import {
  StarterDwarfSkills,
  StarterElfSkills,
  StarterHumanSkills,
} from "../DataTemplates/Skills/StarterRaces";

function CharacterCreator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const player = useSelector((state) => state.currentPlayer);
  const [character, setCharacter] = useState(
    useSelector((state) => state.currentCharacter)
  );

  const [page, setPage] = useState(0);

  const setCharacterData = (data, section) => {
    let newCharacterData = makeMutableCopy(character);
    newCharacterData[section] = data;
    if (
      !newCharacterData.skills &&
      newCharacterData.personalDetails.race !== ""
    ) {
      newCharacterData = addStarterStats(newCharacterData);
    }

    newCharacterData["skills"]["combat"]["dodge"] =
      newCharacterData.characteristics.dexterity * 2;
    newCharacterData["skills"]["mental"]["gaming"] =
      newCharacterData.characteristics.power +
      newCharacterData.characteristics.intelligence;

    setCharacter(newCharacterData);
    dispatch(setCurrentCharacter(newCharacterData));
  };

  const addStarterStats = (nCD) => {
    switch (nCD.personalDetails.race) {
      case "dwarf":
        nCD["characteristics"] = newDwarfCharacteristics;
        nCD["skills"] = StarterDwarfSkills;
        nCD["weapons"] = startingDwarfWeapons;
        break;
      case "elf":
        nCD["characteristics"] = newElfCharacteristics;
        nCD["skills"] = StarterElfSkills;
        nCD["weapons"] = startingElfWeapons;
        break;
      default:
        nCD["characteristics"] = newHumanCharacteristics;
        nCD["skills"] = StarterHumanSkills;
        addStarterStats["weapons"] = startingHumanWeapons;
        break;
    }

    return nCD;
  };

  const createCharacter = () => {
    CreateCharacter(player, character);
    navigate("/home-page");
  };

  const changeStep = (direction) => {
    if (direction === "forward") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  switch (page) {
    case 0:
      return (
        <PersonalCreator
          submitPersonalData={setCharacterData}
          changeStep={changeStep}
        />
      );
    case 1:
      return (
        <StatisticCreator
          character={character}
          submitStatisticData={setCharacterData}
          changeStep={changeStep}
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
      navigate("/home-page");
      return null;
  }
}

export default CharacterCreator;
