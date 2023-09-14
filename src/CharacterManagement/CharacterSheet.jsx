import React, { useState } from "react";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";
import CountUp from "../Views/CountUp";

function CharacterSheet(character) {
  const maxHitPoints =
    character.characteristics.constitution + character.characteristics.size;

  const [postGameChecks, setPostGameChecks] = useState({});
  const [hitPoints, setHitPoints] = useState(maxHitPoints);
  const [powerPoints, setPowerPoints] = useState(
    character.characteristics.power
  );

  const adjustHitPoints = (unnecessary, newHP) => {
    setHitPoints(newHP);
  };

  const adjustPowerPoints = (unnecessary, newPP) => {
    setPowerPoints(newPP);
  };

  const addToPostGameCheckList = (category, characteristicOrSkill) => {
    let oldList = { ...postGameChecks };
    if (!oldList[category]) {
      oldList[category] = [characteristicOrSkill];
    } else if (!oldList[category].includes(characteristicOrSkill)) {
      oldList[category].push(characteristicOrSkill);
    }
    setPostGameChecks(oldList);
  };

  return (
    <div>
      <div>{character.personalDetails.characterName}</div>
      <div>
        Personal
        {PersonalDetailsSection(character.personalDetails)}
      </div>
      <div>
        Characteristics
        {CharacteristicsSection(
          character.characteristics,
          addToPostGameCheckList
        )}
      </div>
      <div>
        <CountUp
          fieldName={"Hit Points"}
          count={hitPoints}
          returnText={adjustHitPoints}
          plusDisabled={hitPoints === maxHitPoints}
          minusDisabled={hitPoints === 0}
        />
      </div>
      {character.magicActivated && (
        <CountUp
          fieldName={"Power Points"}
          count={powerPoints}
          returnText={adjustPowerPoints}
          plusDisabled={powerPoints === character.characteristics.power}
          minusDisabled={powerPoints === 0}
        />
      )}
      <div>
        Skills
        <div>Communication</div>
        <div>Motor Skills</div>
        <div>Mental</div>
        <div>Perception</div>
        <div>Physical</div>
        <div>Combat</div>
      </div>
      <div>Weapons</div>
      <div>Armor</div>
    </div>
  );
}

export default CharacterSheet;
