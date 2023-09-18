import React from "react";
import { SkillStrings } from "../../Tools/Strings";
import SkillDetail from "./SkillDetail";

function SkillsSection({
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
          <td style={{ textAlign: "left" }}>Name</td>
          <td>S</td>
          <td>SS</td>
          <td>Cr</td>
          <td>F</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>{SkillStrings[heading].name}</td>
          <td>{modifier}</td>
          <td>{Math.ceil(modifier / 5)}</td>
          <td>{Math.ceil(modifier / 20)}</td>
          <td>{100 - Math.ceil((100 - modifier) / 20)}</td>
        </tr>
        {Object.keys(skills).map((skill) =>
          skill === "modifier" ? null : (
            <SkillDetail
              grouping={heading}
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
