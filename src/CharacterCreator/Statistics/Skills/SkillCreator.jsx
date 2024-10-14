import React from "react";
import { SkillSectionStrings, ignore } from "../../../Tools/Strings";
import SkillSection from "./SkillSection";

export default function SkillCreator({
  character,
  submitSkillData,
  isDisabled,
}) {
  const skillData = character.skills;

  const skillSections = [
    [SkillSectionStrings.communication, SkillSectionStrings.motorSkills],
    [SkillSectionStrings.mental, SkillSectionStrings.perception],
    [SkillSectionStrings.physical, SkillSectionStrings.combat],
  ];

  const alterSkillData = (newSD) => {
    submitSkillData(newSD, getSkillsCount(), "skills");
  };

  const getSkillsCount = () => {
    let statCount = 0;
    Object.entries(skillData).forEach(([key, value]) => {
      if (!ignore.includes(key.charAt(0).toUpperCase() + key.slice(1))) {
        if (typeof value === "object") {
          Object.values(value).forEach((val) => {
            if (typeof val === "number") {
              statCount += val;
            }
          });
        }
      }
    });

    return 1002 - statCount;
    // return 653 - statCount;
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
                {sectionGroup.map((section, i) => {
                  return (
                    <SkillSection
                      key={i}
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
