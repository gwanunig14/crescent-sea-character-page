import { makeMutableCopy } from "../Tools/ReusableFunctions";
import { ignore } from "../Tools/Strings";
import CountUp from "../Views/CountUp";
import SpecialtyInputAndCountUp from "../Views/SpecialtyInputAndCountUp";

export default function SkillSection(props) {
  const { character, sectionData, skillData, setSkillData, getCount } = props;
  const { sectionName, section, modifier, stringHash } = sectionData;

  function setSkill(key, skillValue) {
    const group = findGroup(skillData, key);
    let newSD = makeMutableCopy(skillData);
    if (typeof skillData[group][key] === "number") {
      newSD[group][key] = Number(skillValue);
    } else {
      newSD[group][key].general = Number(skillValue);
    }
    setSkillData(newSD);
  }

  function setSpecialty(skillKey, specialtyKey, specialtyValue) {
    const group = findGroup(skillData, skillKey);
    let newSD = makeMutableCopy(skillData);
    newSD[group][skillKey][specialtyKey] = specialtyValue;
    setSkillData(newSD);
  }

  const skillSectionModifierNumber = (modifier) => {
    debugger;
    return Math.floor(character.characteristics[modifier] / 2);
  };

  const countUpLoop = (skillHash, skillGroup) => {
    return Object.keys(skillHash).map((skill) => {
      if (typeof skillData[skillGroup][skill] === "number") {
        const skillString = skillHash[skill];
        const skillPoint = skillData[skillGroup][skill];
        return countUpView(
          skillString,
          skill,
          skillPoint,
          disabled(skill, skillPoint, "plus"),
          disabled(skill, skillPoint, "minus")
        );
      } else if (skill !== "name") {
        return (
          <SpecialtyInputAndCountUp
            key={skill}
            primarySkill={skill}
            stringHash={skillHash[skill]}
            list={skillData[skillGroup][skill]}
            setSkill={setSkill}
            setSpecialty={setSpecialty}
            disabled={disabled}
          />
        );
      } else return null;
    });
  };

  const countUpView = (
    fieldName,
    dataKey,
    count,
    plusDisabled,
    minusDisabled
  ) => (
    <CountUp
      key={dataKey}
      fieldName={fieldName}
      dataKey={dataKey}
      count={count}
      returnText={setSkill}
      plusDisabled={plusDisabled}
      minusDisabled={minusDisabled}
    />
  );

  function findGroup(hash, targetItem) {
    for (const k in hash) {
      for (const ke in hash[k]) {
        if (ke === targetItem) {
          return k;
        }
      }
    }
  }

  const disabled = (skill, current, func) => {
    if (ignore.includes(skill)) return true;
    if (func === "plus") {
      if (getCount() === 0) {
        return true;
      } else if (current === 100) {
        return true;
      }
    } else {
      if (current === 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <table>
        <tbody>
          <tr>
            <td style={{ top: 0, textAlign: "left" }}>
              {`${sectionName} skills will have
                ${skillSectionModifierNumber(modifier)} ${
                skillSectionModifierNumber(modifier) > 1 ? "points" : "point"
              }
                 added to them based on ${
                   character.personalDetails.characterName
                 }
                's ${modifier}`}
            </td>
          </tr>
        </tbody>
      </table>
      {countUpLoop(stringHash, section)}
    </div>
  );
}
