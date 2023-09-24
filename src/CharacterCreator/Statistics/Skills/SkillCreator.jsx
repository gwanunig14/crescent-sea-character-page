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
    Object.values(skillData).forEach((v) => {
      Object.values(v).forEach((va) => {
        if (!ignore.includes(v)) {
          if (typeof va === "number") {
            statCount += va;
          } else if (typeof va !== "string") {
            Object.values(va).forEach((val) => {
              statCount += val;
            });
          }
        }
      });
    });

    // return 1232 - statCount;
    return 897 - statCount;
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
