import React, { useState } from "react";
import { SkillSectionStrings, ignore } from "../Tools/Strings";
import {
  StarterDwarfSkills,
  StarterElfSkills,
  StarterHumanSkills,
} from "../DataTemplates/Skills/StarterRaces";
import { useSelector } from "react-redux";
import SkillSection from "./SkillSection";

export default function SkillCreator(submitSkillData) {
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
    submitSkillData(newSD, "skills");
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

  const getCount = () => {
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
      <div>{`${getCount()} skill points remaining.`}</div>
      <table>
        <tbody>
          <tr>
            {skillSections.map((sectionGroup) => (
              <td>
                {sectionGroup.map((section) => {
                  console.log(section);
                  return (
                    <SkillSection
                      character={character}
                      sectionData={section}
                      skillData={skillData}
                      setSkillData={alterSkillData}
                      getCount={getCount}
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
