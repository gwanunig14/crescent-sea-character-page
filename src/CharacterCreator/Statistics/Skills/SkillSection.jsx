import { makeMutableCopy } from "../../../Tools/ReusableFunctions";
import { ignore } from "../../../Tools/Strings";
import GenericCountUp from "../../../Views/CountUp";
import SpecialtyInputAndCountUp from "../../../Views/SpecialtyInputAndCountUp";

export default function SkillSection(props) {
  const {
    character,
    sectionData,
    skillData,
    setSkillData,
    getSkillsCount,
    isDisabled,
  } = props;
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
    return character.characteristics
      ? Math.floor(character.characteristics[modifier] / 2)
      : 0;
  };

  const countUpLoop = (skillHash, skillGroup) => {
    return Object.keys(skillHash).map((skill) => {
      if (typeof skillData[skillGroup][skill] === "number") {
        const skillString = skillHash[skill];
        const skillPoint = skillData[skillGroup][skill];
        return (
          <GenericCountUp
            key={skill}
            fieldName={skillString}
            dataKey={skill}
            count={skillPoint}
            returnText={setSkill}
            plusDisabled={disabled(skill, skillPoint, "plus")}
            minusDisabled={disabled(skill, skillPoint, "minus")}
          />
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
    return isDisabled(current, func, getSkillsCount(), 100);
  };

  return (
    <div style={{ maxWidth: "470px", marginBottom: "30px" }}>
      <div>
        {`${sectionName} skills will have
                ${skillSectionModifierNumber(modifier)} ${
          skillSectionModifierNumber(modifier) > 1 ? "points" : "point"
        }
                 added to them based on ${
                   character.personalDetails.characterName
                 }'s ${modifier}`}
      </div>
      {countUpLoop(stringHash, section)}
    </div>
  );
}
