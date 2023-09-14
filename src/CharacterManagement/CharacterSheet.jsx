import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";
import CountUp from "../Views/CountUp";
import SkillsSection from "./CharacterSheetSections/SkillsSection";

function CharacterSheet() {
  const character = useSelector((state) => state.currentCharacter);

  const { personalDetails, characteristics, skills, magicActivated } =
    character;

  const maxHitPoints = characteristics.constitution + characteristics.size;

  const [postGameChecks, setPostGameChecks] = useState({});
  const [hitPoints, setHitPoints] = useState(maxHitPoints);
  const [powerPoints, setPowerPoints] = useState(characteristics.power);
  const [drinkCounter, setDrinkCounter] = useState(0);

  const adjustHitPoints = (unnecessary, newHP) => {
    setHitPoints(newHP);
  };

  const adjustPowerPoints = (unnecessary, newPP) => {
    setPowerPoints(newPP);
  };

  const adjustDrinks = (unnecessary, newD) => {
    setDrinkCounter(newD);
  };

  const addToPostGameCheckList = (category, characteristicOrSkill) => {
    setPostGameChecks((oldList) => {
      const newList = { ...oldList };
      newList[category] = [...(newList[category] || []), characteristicOrSkill];
      return newList;
    });
  };

  return (
    <div>
      <div>{personalDetails.characterName}</div>
      <div>
        Personal
        <PersonalDetailsSection personalData={personalDetails} />
      </div>
      <div>
        Characteristics
        <CharacteristicsSection
          characteristics={characteristics}
          postGameCheck={addToPostGameCheckList}
          drinks={drinkCounter}
        />
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
      {magicActivated && (
        <div>
          <CountUp
            fieldName={"Power Points"}
            count={powerPoints}
            returnText={adjustPowerPoints}
            plusDisabled={powerPoints === characteristics.power}
            minusDisabled={powerPoints === 0}
          />
        </div>
      )}
      <div>
        <CountUp
          fieldName={"Drinks"}
          count={drinkCounter}
          returnText={adjustDrinks}
          plusDisabled={drinkCounter === 100}
          minusDisabled={drinkCounter === 0}
        />
      </div>
      <div>
        Skills
        {Object.entries(skills).map(([heading, skill]) => {
          return (
            <SkillsSection
              key={heading}
              heading={heading}
              modifier={Math.floor(characteristics[skill.modifier] / 2)}
              skills={skill}
              drinks={drinkCounter}
              postGameCheck={addToPostGameCheckList}
            />
          );
        })}
      </div>
      <div>Weapons</div>
      <div>Armor</div>
    </div>
  );
}

export default CharacterSheet;
