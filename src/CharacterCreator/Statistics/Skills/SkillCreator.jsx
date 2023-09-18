import React, { useState } from "react";
import { SkillSectionStrings, ignore } from "../../../Tools/Strings";
import {
  StarterDwarfSkills,
  StarterElfSkills,
  StarterHumanSkills,
} from "../../../DataTemplates/Skills/StarterRaces";
import { useSelector } from "react-redux";
import SkillSection from "./SkillSection";

export default function SkillCreator({ submitSkillData, isDisabled }) {
  const character = useSelector((state) => state.currentCharacter);
  const [skillData, setSkillData] = useState(
    character.skills || getDefaultSkills(character)
  );

  const skillSections = [
    [SkillSectionStrings.communication, SkillSectionStrings.motorSkills],
    [SkillSectionStrings.mental, SkillSectionStrings.perception],
    [SkillSectionStrings.physical, SkillSectionStrings.combat],
  ];

  const alterSkillData = (newSD) => {
    setSkillData(newSD);
    submitSkillData(newSD, getSkillsCount(), "skills");
  };

  function getDefaultSkills(character) {
    switch (character.personalDetails.race) {
      case "dwarf":
        return StarterDwarfSkills;
      case "elf":
        return StarterElfSkills;
      default:
        return StarterHumanSkills;
    }
  }

  const getSkillsCount = () => {
    let statCount = 0;
    Object.values(skillData).forEach((v) => {
      Object.values(v).forEach((va) => {
        if (!ignore.includes(v))
          if (typeof va === "number") {
            statCount += va;
          } else if (typeof va !== "string") {
            Object.values(va).forEach((val) => {
              statCount += val;
            });
          }
      });
    });

    // return 1232 - statCount;
    return 883 - statCount;
  };

  return (
    <div>
      <div>{`${getSkillsCount()}`}</div>
      <div>{`skill points remaining.`}</div>
      <table>
        <tbody>
          <tr>
            {skillSections.map((sectionGroup) => (
              <td style={{ verticalAlign: "top", textAlign: "left" }}>
                {sectionGroup.map((section) => {
                  return (
                    <SkillSection
                      character={character}
                      sectionData={section}
                      skillData={skillData}
                      setSkillData={alterSkillData}
                      getSkillsCount={getSkillsCount}
                      isDisabled={isDisabled}
                    />
                  );
                })}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
