import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/characterSheet.scss";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSection";
import SkillsSection from "./CharacterSheetSections/SkillsSection";
import { characterSheetStyleNames } from "../Tools/StyleNames";
import { KingdomStrings, SkillSectionStrings } from "../Tools/Strings";
import CounterSection from "./CounterSection";
import WeaponsSection from "./CharacterSheetSections/WeaponsSection";
import ArmorSection from "./CharacterSheetSections/ArmorSection";
import ShieldSection from "./CharacterSheetSections/ShieldSection";
import KingdomReputationsSection from "./KingdomReputationsSection";
import SkillsBlock from "./CharacterSheetSections/SkillsBlock";
import { emptyArray } from "../Tools/ReusableFunctions";

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
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <tbody>
          <tr
            className={characterSheetStyleNames.skillCategoryRow}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <td>
              <div className={characterSheetStyleNames.title}>Personal</div>
              <div className={characterSheetStyleNames.box}>
                <PersonalDetailsSection personalData={personalDetails} />
              </div>
            </td>
            <td>
              <div>
                <div className={characterSheetStyleNames.title}>
                  Characteristics
                </div>
                <div
                  className={`${characterSheetStyleNames.box} characteristics`}
                >
                  <CharacteristicsSection
                    characteristics={characteristics}
                    postGameCheck={addToPostGameCheckList}
                    drinks={drinkCounter}
                    confirmation={confirmation}
                  />
                </div>
              </div>
            </td>
            <CounterSection
              maxHitPoints={maxHitPoints}
              power={characteristics.power}
              magicActivated={magicActivated}
              drinkCounter={drinkCounter}
              adjustDrinks={adjustDrinks}
              confirmation={confirmation}
            />
          </tr>
        </tbody>
      </table>
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
      {character.weapons && Object.keys(character.weapons).length !== 0 && (
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
