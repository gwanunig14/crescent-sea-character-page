import React from "react";
import { SkillStrings } from "../../Strings";
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
  const strings = SkillStrings;

  let modifiedSuccess = 0;
  if (typeof success !== "number") {
    success = success - drinks;
    modifiedSuccess = success + modifier < 100 ? success + modifier : 100;
  }
  const successfulTest = (characteristic) => postGameCheck(characteristic);

  if (typeof success !== "number") {
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
    return (
      <div>
        <div>
          {typeof SkillStrings[grouping][skill] === "string"
            ? SkillStrings[grouping][skill]
            : SkillStrings[grouping][skill].name}
        </div>
        <div>{"success " + modifiedSuccess}</div>
        <div>{"special success " + Math.ceil(modifiedSuccess / 5)}</div>
        <div>{"critical " + Math.ceil(modifiedSuccess / 20)}</div>
        <div>
          {"failure " + (100 - Math.ceil((100 - modifiedSuccess) / 20))}
        </div>
        {!confirmation && (
          <Button onClick={() => successfulTest(skill)}>Successful Test</Button>
        )}
      </div>
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
    <div>
      <div>
        <div>{SkillStrings[heading].name}</div>
        <div>{"success " + modifier}</div>
        <div>{"special success " + Math.ceil(modifier / 5)}</div>
        <div>{"critical " + Math.ceil(modifier / 20)}</div>
        <div>{"failure " + (100 - Math.ceil((100 - modifier) / 20))}</div>
      </div>
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
    </div>
  );
}

export default SkillsSection;
