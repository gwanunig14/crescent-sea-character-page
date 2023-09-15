import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";
import CountUp from "../Views/CountUp";
import SkillsSection from "./CharacterSheetSections/SkillsSection";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CharacterSheet({ confirmation }) {
  const navigate = useNavigate();
  const character = useSelector((state) => state.currentCharacter);

  const { personalDetails, characteristics, skills, magicActivated } =
    character;

  const maxHitPoints = characteristics.constitution + characteristics.size;

  const [postGameChecks, setPostGameChecks] = useState([]);
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

  const addToPostGameCheckList = (characteristicOrSkill) => {
    if (!postGameChecks.includes(characteristicOrSkill)) {
      let newGC = postGameChecks;
      newGC.push(characteristicOrSkill);
      setPostGameChecks(newGC);
    }
  };

  const endSession = () => {
    if (postGameChecks.length) {
      navigate("/finalize", { state: { checks: postGameChecks } });
    } else {
      navigate("/home-page");
    }
  };

  return (
    <div>
      <div>{personalDetails.characterName}</div>
      {!confirmation && <Button onClick={endSession}>End Session</Button>}
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
          confirmation={confirmation}
        />
      </div>
      <div>
        <CountUp
          fieldName={"Hit Points"}
          count={hitPoints}
          returnText={adjustHitPoints}
          plusDisabled={hitPoints === maxHitPoints}
          minusDisabled={hitPoints === 0}
          confirmation={confirmation}
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
            confirmation={confirmation}
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
          confirmation={confirmation}
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
              confirmation={confirmation}
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
