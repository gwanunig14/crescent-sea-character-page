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
    <table>
      <tbody>
        <tr>
          <td style={{ textAlign: "left", width: "130px" }}> </td>
          <td style={{ textAlign: "center" }}>Success</td>
          <td style={{ textAlign: "center" }}>Sp. Success</td>
          <td style={{ textAlign: "center" }}>Critical</td>
          <td style={{ textAlign: "center" }}>Fumble</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>{heading}</td>
          <td style={{ textAlign: "center" }}>{modifier}</td>
          <td style={{ textAlign: "center" }}>{Math.ceil(modifier / 5)}</td>
          <td style={{ textAlign: "center" }}>{Math.ceil(modifier / 20)}</td>
          <td style={{ textAlign: "center" }}>
            {100 - Math.ceil((100 - modifier) / 20)}
          </td>
        </tr>
        {Object.keys(skills).map((skill) =>
          skill === "modifier" ? null : (
            <SkillDetail
              grouping={sectionName}
              key={skill}
              skill={skill}
              success={skills[skill]}
              modifier={modifier}
              postGameCheck={postGameCheck}
              drinks={drinks * 5}
              confirmation={confirmation}
            />
          )
        )}
      </tbody>
    </table>
  );
}

export default SkillsSection;
