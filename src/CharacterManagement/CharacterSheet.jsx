import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/characterSheet.scss";
import { characterSheetStyleNames } from "../Tools/StyleNames";
import { SkillSectionStrings } from "../Tools/Strings";
import WeaponsSection from "./CharacterSheetSections/WeaponsSection";
import ArmorSection from "./CharacterSheetSections/ArmorSection";
import ShieldSection from "./CharacterSheetSections/ShieldSection";
import KingdomReputationsSection from "./KingdomReputationsSection";
import SkillsBlock from "./CharacterSheetSections/SkillsBlock";
import { emptyArray } from "../Tools/ReusableFunctions";
import CharacterDetailsSection from "./CharacterSheetSections/CharacterDetailsSection";

function CharacterSheet({ confirmation }) {
  const navigate = useNavigate();
  const character = useSelector((state) => state.currentCharacter);

  const { personalDetails, characteristics, skills, magicActivated } =
    character;

  const maxHitPoints = characteristics.constitution + characteristics.size;

  const [postGameChecks, setPostGameChecks] = useState([]);
  const [drinkCounter, setDrinkCounter] = useState(0);

  const skillSections = [
    [SkillSectionStrings.communication, SkillSectionStrings.motorSkills],
    [SkillSectionStrings.mental, SkillSectionStrings.perception],
    [SkillSectionStrings.physical, SkillSectionStrings.combat],
  ];

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
    <div styles={{ width: "100%", padding: "20px" }}>
      <div className={characterSheetStyleNames.header}>
        <div className={characterSheetStyleNames.name}>
          {personalDetails.characterName}
        </div>
        {!confirmation && (
          <Button
            className={characterSheetStyleNames.endSession}
            onClick={endSession}
            style={{ margin: "30px" }}
          >
            End Session
          </Button>
        )}
      </div>
      <CharacterDetailsSection
        personalDetails={personalDetails}
        characteristics={characteristics}
        addToPostGameCheckList={addToPostGameCheckList}
        drinkCounter={drinkCounter}
        confirmation={confirmation}
        maxHitPoints={maxHitPoints}
        magicActivated={magicActivated}
        adjustDrinks={adjustDrinks}
      />
      <KingdomReputationsSection
        kingdomReputations={personalDetails.kingdomReputations}
      />
      <SkillsBlock
        skillSections={skillSections}
        characteristics={characteristics}
        skills={skills}
        drinkCounter={drinkCounter}
        addToPostGameCheckList={addToPostGameCheckList}
        confirmation={confirmation}
      />
      {!confirmation &&
        character.armor &&
        !emptyArray(character.armor.armor) && (
          <ArmorSection armor={character.armor.armor} />
        )}
      {!confirmation &&
        character.armor.shield &&
        !emptyArray(character.armor.shield) && (
          <ShieldSection
            shields={character.armor.shield}
            skill={character.skills.combat.shield}
          />
        )}
      {character.weapons && emptyArray(character.weapons) && (
        <div style={{ paddingTop: "30px" }}>
          <div
            style={{ borderBottom: "1px solid black" }}
            className={characterSheetStyleNames.title}
          >
            Weapons
          </div>
          <WeaponsSection character={character} drinks={drinkCounter} />
        </div>
      )}
    </div>
  );
}

export default CharacterSheet;
