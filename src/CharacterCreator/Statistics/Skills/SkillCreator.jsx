import React from "react";
import { SkillSectionStrings } from "../../../Tools/Strings";
import SkillSection from "./SkillSection";

export default function SkillCreator({
  character,
  submitSkillData,
  isDisabled,
}) {
  const skillData = character.skills;

  const skillSections = [
    SkillSectionStrings.communication,
    SkillSectionStrings.motorSkills,
    SkillSectionStrings.mental,
    SkillSectionStrings.perception,
    SkillSectionStrings.physical,
    SkillSectionStrings.combat,
  ];

  const alterSkillData = (newSD) => {
    submitSkillData(newSD, getSkillsCount(), "skills");
  };

  const getSkillsCount = () => {
    let statCount = 0;
    Object.entries(skillData).forEach(([key, value]) => {
      if (typeof value === "object") {
        Object.values(value).forEach((val) => {
          if (typeof val === "number") {
            statCount += val;
          }
        });
      }
    });

    return 1002 - statCount;
    // return 653 - statCount;
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div className="tattered-banner">
        <div>{`${getSkillsCount()} Skill Point${
          getSkillsCount() === 1 ? "" : "s"
        } Remaining.`}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1 1 30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SkillSection
            character={character}
            sectionData={skillSections[0]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
          <SkillSection
            character={character}
            sectionData={skillSections[3]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
        </div>
        <div
          style={{
            flex: "1 1 30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SkillSection
            character={character}
            sectionData={skillSections[1]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
          <SkillSection
            character={character}
            sectionData={skillSections[4]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
        </div>
        <div
          style={{
            flex: "1 1 30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SkillSection
            character={character}
            sectionData={skillSections[2]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
          <SkillSection
            character={character}
            sectionData={skillSections[5]}
            skillData={skillData}
            setSkillData={alterSkillData}
            getSkillsCount={getSkillsCount}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}
