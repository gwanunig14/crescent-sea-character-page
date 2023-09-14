import React, { useState } from "react";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";
import CountUp from "../Views/CountUp";
import SkillsSection from "./CharacterSheetSections/SkillsSection";

function CharacterSheet(character) {
  const { personalDetails, characteristics, skills } = character;

  const maxHitPoints = characteristics.constitution + characteristics.size;

  const [postGameChecks, setPostGameChecks] = useState({});
  const [hitPoints, setHitPoints] = useState(maxHitPoints);
  const [powerPoints, setPowerPoints] = useState(characteristics.power);

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
      <div>{personalDetails.characterName}</div>
      <div>
        Personal
        {PersonalDetailsSection(personalDetails)}
      </div>
      <div>
        Characteristics
        {CharacteristicsSection(characteristics, addToPostGameCheckList)}
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
          plusDisabled={powerPoints === characteristics.power}
          minusDisabled={powerPoints === 0}
        />
      )}
      <div>
        Skills
        <SkillsSection
          heading="communication"
          modifier={Math.floor(characteristics.charisma / 2)}
          skills={skills.communication}
        />
        <SkillsSection
          heading="motorSkills"
          modifier={Math.floor(characteristics.dexterity / 2)}
          skills={skills.motorSkills}
        />
        <SkillsSection
          heading="mental"
          modifier={Math.floor(characteristics.intelligence / 2)}
          skills={skills.mental}
        />
        <SkillsSection
          heading="perception"
          modifier={Math.floor(characteristics.power / 2)}
          skills={skills.perception}
        />
        <SkillsSection
          heading="physical"
          modifier={Math.floor(characteristics.strength / 2)}
          skills={skills.physical}
        />
        <SkillsSection
          heading="combat"
          modifier={Math.floor(characteristics.dexterity / 2)}
          skills={skills.combat}
        />
      </div>
      <div>Weapons</div>
      <div>Armor</div>
    </div>
  );
}

export default CharacterSheet;
