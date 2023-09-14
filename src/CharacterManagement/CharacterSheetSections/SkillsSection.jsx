import React from "react";
import { SkillStrings } from "../../Strings";
import Button from "react-bootstrap/Button";

function SkillDetail({ skill, success, modifier, postGameCheck, drinks }) {
  success = success - drinks;
  const modifiedSuccess = success + modifier;
  const successfulTest = (characteristic) =>
    postGameCheck("characteristics", characteristic);

  if (typeof success !== "number") {
    return (
      <>
        {success.general !== undefined && (
          <SkillDetail
            skill={skill}
            success={success.general}
            modifier={modifier}
          />
        )}
        {Object.keys(success).map((specialty) =>
          specialty !== "general" ? (
            <SkillDetail
              key={specialty}
              skill={specialty}
              success={success[specialty]}
              modifier={modifier}
            />
          ) : null
        )}
      </>
    );
  } else {
    return (
      <div>
        <div>{skill}</div>
        <div>{"success " + modifiedSuccess}</div>
        <div>{"special success " + Math.ceil(modifiedSuccess / 5)}</div>
        <div>{"critical " + Math.ceil(modifiedSuccess / 20)}</div>
        <div>
          {"failure " + (100 - Math.ceil((100 - modifiedSuccess) / 20))}
        </div>
        <Button onClick={() => successfulTest(skill)}>Successful Test</Button>
      </div>
    );
  }
}

function SkillsSection({ heading, modifier, skills, postGameCheck, drinks }) {
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
            key={skill}
            skill={skill}
            success={skills[skill]}
            modifier={modifier}
            postGameCheck={postGameCheck}
            drinks={drinks * 5}
          />
        )
      )}
    </div>
  );
}

export default SkillsSection;
