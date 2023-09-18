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
      <table>
        <tbody>
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
      <div>
        <div className={characterSheetStyleNames.title}>Skills</div>
        <table>
          <tbody>
            <tr>
              {skillSections.map((sectionGroup) => (
                <td style={{ verticalAlign: "top", textAlign: "left" }}>
                  {sectionGroup.map((section) => (
                    <SkillsSection
                      key={section.section}
                      sectionName={section.section}
                      heading={section.sectionName}
                      modifier={Math.floor(
                        characteristics[section.modifier] / 2
                      )}
                      skills={skills[section.section]}
                      drinks={drinkCounter}
                      postGameCheck={addToPostGameCheckList}
                      confirmation={confirmation}
                    />
                  ))}
                </td>
              ))}
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
