import React from "react";
import { SkillStrings } from "../../Tools/Strings";
import Button from "react-bootstrap/Button";

function SkillDetail({
  grouping,
  skill,
  success,
  modifier,
  postGameCheck,
  drinks,
  confirmation,
}) {
  const successfulTest = (characteristic) => postGameCheck(characteristic);
  let modifiedSuccess = 0;

  if (typeof success !== "number") {
    success = success.general - drinks;
    modifiedSuccess = success + modifier < 100 ? success + modifier : 100;
    return (
      <>
        {success.general !== undefined && (
          <SkillDetail
            skill={skill}
            success={success.general}
            modifier={modifier}
            confirmation={confirmation}
          />
        )}
        {Object.keys(success).map((specialty) => {
          return specialty !== "general" ? (
            <SkillDetail
              key={specialty}
              skill={specialty}
              success={success[specialty]}
              modifier={modifier}
              confirmation={confirmation}
            />
          ) : null;
        })}
      </>
    );
  } else {
    success = success - drinks;
    modifiedSuccess = success + modifier < 100 ? success + modifier : 100;
    return (
      <tr>
        <td style={{ textAlign: "left" }}>
          {typeof SkillStrings[grouping][skill] === "string"
            ? SkillStrings[grouping][skill]
            : SkillStrings[grouping][skill].name}
        </td>
        <td>{modifiedSuccess}</td>
        <td>{Math.ceil(modifiedSuccess / 5)}</td>
        <td>{Math.ceil(modifiedSuccess / 20)}</td>
        <td>{100 - Math.ceil((100 - modifiedSuccess) / 20)}</td>
        <td>
          {!confirmation && (
            <Button onClick={() => successfulTest(skill)}>Success</Button>
          )}
        </td>
      </tr>
    );
  }
}

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
