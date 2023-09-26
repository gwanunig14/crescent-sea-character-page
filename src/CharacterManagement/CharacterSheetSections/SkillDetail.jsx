import React from "react";
import { SkillStrings } from "../../Tools/Strings";
import { digIn, emptyArray } from "../../Tools/ReusableFunctions";
import Button from "react-bootstrap/Button";

export default function SkillDetail({
  grouping,
  skill,
  success,
  modifier,
  postGameCheck,
  drinks,
  confirmation,
  heading = false,
  specialy = false,
}) {
  const successfulTest = (characteristic) => postGameCheck(characteristic);
  let modifiedSuccess = 0;

  function hasOnlyGeneralKey(obj) {
    const keys = Object.keys(obj);
    return keys.length === 1 && keys[0] === "general";
  }

  if (typeof success !== "number") {
    return (
      <>
        {success.general !== undefined ? (
          <SkillDetail
            skill={skill}
            success={success.general}
            modifier={modifier}
            confirmation={confirmation}
            drinks={drinks}
            grouping={grouping}
            postGameCheck={postGameCheck}
            heading={emptyArray(success) || !hasOnlyGeneralKey(success)}
          />
        ) : (
          !emptyArray(success) && (
            <div style={{ borderBottom: "1px solid black" }}>
              <div
                style={{
                  textAlign: "left",
                  paddingLeft: "8px",
                  width: "100%",
                  marginBottom: "8px",
                  fontSize: "20px",
                }}
                colSpan={5}
              >
                {typeof digIn(SkillStrings, skill).object === "string"
                  ? digIn(SkillStrings, skill).object
                  : digIn(SkillStrings, skill).object.name}
              </div>
            </div>
          )
        )}
        {success.map(({ specialty, val }) => {
          return specialty !== "general" ? (
            <SkillDetail
              key={specialty}
              skill={specialty}
              success={val}
              modifier={modifier}
              confirmation={confirmation}
              drinks={drinks}
              grouping={grouping}
              postGameCheck={postGameCheck}
              specialy={true}
            />
          ) : null;
        })}
      </>
    );
  } else {
    success = success - drinks;
    modifiedSuccess = success + modifier < 99 ? success + modifier : 99;
    return (
      <div className={`skill-detail skill-row ${heading && "skill-heading"}`}>
        <div
          className={`skill-name-cell "} ${specialy && "skill-specialty-cell"}`}
        >
          {typeof digIn(SkillStrings, skill).object === "string"
            ? digIn(SkillStrings, skill).object
            : digIn(SkillStrings, skill).object.name}
        </div>
        <div className="stat-cell">{modifiedSuccess}</div>
        <div className="stat-cell">{Math.ceil(modifiedSuccess / 5)}</div>
        <div className="stat-cell">{Math.ceil(modifiedSuccess / 20)}</div>
        <div className="stat-cell">
          {modifiedSuccess === 99
            ? 100
            : 100 - Math.ceil((100 - modifiedSuccess) / 20)}
        </div>
        {!confirmation && modifiedSuccess < 99 && (
          <div className="skill-button-cell">
            <Button onClick={() => successfulTest(skill)}>success</Button>
          </div>
        )}
      </div>
    );
  }
}
