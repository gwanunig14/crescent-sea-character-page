import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/characterSheet.scss";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";
import GenericCountUp from "../Views/CountUp";
import SkillsSection from "./CharacterSheetSections/SkillsSection";
import { characterSheetStyleNames } from "../Tools/StyleNames";
import { KingdomStrings } from "../Tools/Strings";

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
    <div styles={{ width: "100%", padding: "20px" }}>
      <div className={characterSheetStyleNames.header}>
        <div className={characterSheetStyleNames.name}>
          {personalDetails.characterName}
        </div>
        {!confirmation && (
          <Button
            className={characterSheetStyleNames.endSession}
            onClick={endSession}
          >
            End Session
          </Button>
        )}
      </div>
      {/* <div className={"sectionTopRow"}> */}
      <table style={{ width: "100%" }}>
        <tr className={characterSheetStyleNames.skillCategoryRow}>
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
              <div className={characterSheetStyleNames.box}>
                <CharacteristicsSection
                  characteristics={characteristics}
                  postGameCheck={addToPostGameCheckList}
                  drinks={drinkCounter}
                  confirmation={confirmation}
                />
              </div>
            </div>
          </td>
          <td>
            <div className={characterSheetStyleNames.title}>Counters</div>
            <div className={characterSheetStyleNames.box}>
              <div>
                <GenericCountUp
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
                  <GenericCountUp
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
                <GenericCountUp
                  fieldName={"Drinks"}
                  count={drinkCounter}
                  returnText={adjustDrinks}
                  plusDisabled={drinkCounter === 100}
                  minusDisabled={drinkCounter === 0}
                  confirmation={confirmation}
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div className={characterSheetStyleNames.title}>Kingdom Reputations</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {Object.keys(personalDetails.kingdomReputations).map((rep) => (
              <td>
                <div>{KingdomStrings[rep]}</div>
                <div>{personalDetails.kingdomReputations[rep]}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* </div> */}
      <div>
        <div className={characterSheetStyleNames.title}>Skills</div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"communication"}
                  heading={"communication"}
                  modifier={Math.floor(
                    characteristics[skills.communication.modifier] / 2
                  )}
                  skills={skills.communication}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"mental"}
                  heading={"mental"}
                  modifier={Math.floor(
                    characteristics[skills.mental.modifier] / 2
                  )}
                  skills={skills.mental}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"physical"}
                  heading={"physical"}
                  modifier={Math.floor(
                    characteristics[skills.physical.modifier] / 2
                  )}
                  skills={skills.physical}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
            </tr>
            <tr>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"motorSkills"}
                  heading={"motorSkills"}
                  modifier={Math.floor(
                    characteristics[skills.motorSkills.modifier] / 2
                  )}
                  skills={skills.motorSkills}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"perception"}
                  heading={"perception"}
                  modifier={Math.floor(
                    characteristics[skills.perception.modifier] / 2
                  )}
                  skills={skills.perception}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
              <td className={characterSheetStyleNames.skillCategoryRow}>
                <SkillsSection
                  key={"combat"}
                  heading={"combat"}
                  modifier={Math.floor(
                    characteristics[skills.combat.modifier] / 2
                  )}
                  skills={skills.combat}
                  drinks={drinkCounter}
                  postGameCheck={addToPostGameCheckList}
                  confirmation={confirmation}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>Weapons</div>
      <div>Armor</div>
    </div>
  );
}

export default CharacterSheet;
