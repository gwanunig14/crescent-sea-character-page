import React from "react";
import "../../styles/characterSheet.scss";
import SkillsSection from "./SkillsSection";
import { characterSheetStyleNames } from "../../Tools/StyleNames";

export default function SkillsBlock({
  skillSections,
  characteristics,
  skills,
  drinkCounter,
  addToPostGameCheckList,
  confirmation,
}) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <div
        style={{ borderBottom: "1px solid black" }}
        className={characterSheetStyleNames.title}
      >
        Skills
      </div>
      <div className="skill-section-groups">
        {skillSections.map((sectionGroup, i) => (
          <div key={i} style={{ verticalAlign: "top", textAlign: "left" }}>
            {sectionGroup.map((section) => (
              <SkillsSection
                key={section.section}
                sectionName={section.section}
                heading={section.sectionName}
                modifier={Math.floor(characteristics[section.modifier] / 2)}
                skills={skills[section.section]}
                drinks={drinkCounter}
                postGameCheck={addToPostGameCheckList}
                confirmation={confirmation}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
