import React from "react";
import { SkillStrings } from "../../Tools/Strings";
import Button from "react-bootstrap/Button";

export default function SkillDetail({
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
