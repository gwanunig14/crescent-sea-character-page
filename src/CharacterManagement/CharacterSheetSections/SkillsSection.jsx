import React from "react";
import { SkillStrings } from "../../Strings";

function SkillDetail({ skill, success, modifier }) {
  const modifiedSuccess = success + modifier;

  if (typeof success !== "number") {
    return (
      <>
        {success.general !== undefined ? (
          <SkillDetail
            skill={skill}
            success={success.general}
            modifier={modifier}
          />
        ) : null}
        {Object.keys(success).map((specialty) => {
          return (
            specialty !== "general" && (
              <SkillDetail
                key={specialty}
                skill={specialty}
                success={success[specialty]}
                modifier={modifier}
              />
            )
          );
        })}
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
      </div>
    );
  }
}

function SkillsSection(heading, modifier, skills) {
  const strings = SkillStrings;
  debugger;
  return null;
  //   return (
  //     <div>
  //       <div>
  //         <div>{SkillStrings[heading].name}</div>
  //         <div>{"success " + modifier}</div>
  //         <div>{"special success " + Math.ceil(modifier / 5)}</div>
  //         <div>{"critical " + Math.ceil(modifier / 20)}</div>
  //         <div>{"failure " + (100 - Math.ceil((100 - modifier) / 20))}</div>
  //       </div>
  //       {Object.keys(skills).map((skill) => (
  //         <SkillDetail
  //           key={skill}
  //           skill={skill}
  //           success={skills[skill]}
  //           modifier={modifier}
  //         />
  //       ))}
  //     </div>
  //   );
}

export default SkillsSection;
