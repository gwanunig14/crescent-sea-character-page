import React from "react";
import SkillDetail from "./SkillDetail";

function SkillsSection({
  sectionName,
  heading,
  modifier,
  skills,
  postGameCheck,
  drinks,
  confirmation,
}) {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <div className="column-labels">
        <div className={"skill-name-cell"} style={{ textAlign: "left" }} />
        <div className="stat-cell column-label">Success</div>
        <div className="stat-cell column-label">Sp. Suc.</div>
        <div className="stat-cell column-label">Critical</div>
        <div className="stat-cell column-label">Fumble</div>
      </div>
      <div
        className="skill-row header"
        style={{ borderBottom: "1px solid black" }}
      >
        <div
          className={"skill-name-cell"}
          style={{
            fontSize: "24px",
            fontStyle: "bold",
            textAlign: "left",
            width: "180px",
          }}
        >
          {heading}
        </div>
        <div className="stat-cell">{modifier}</div>
        <div className="stat-cell">{Math.ceil(modifier / 5)}</div>
        <div className="stat-cell">{Math.ceil(modifier / 20)}</div>
        <div className="stat-cell">
          {100 - Math.ceil((100 - modifier) / 20)}
        </div>
      </div>
      {skills.map(({ skill, val }) =>
        skill === "modifier" ? null : (
          <SkillDetail
            grouping={sectionName}
            key={skill}
            skill={skill}
            success={val}
            modifier={modifier}
            postGameCheck={postGameCheck}
            drinks={drinks * 5}
            confirmation={confirmation}
          />
        )
      )}
    </div>
  );
}

export default SkillsSection;
