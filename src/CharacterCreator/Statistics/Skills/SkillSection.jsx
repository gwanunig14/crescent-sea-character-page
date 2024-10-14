import { makeMutableCopy } from "../../../Tools/ReusableFunctions";
import { ignore } from "../../../Tools/Strings";
import GenericCountUp from "../../../Views/CountUp";
import SpecialtyInputAndCountUp from "../../../Views/SpecialtyInputAndCountUp";

const SkillCountUp = ({
  skill,
  skillString,
  skillPoint,
  setSkill,
  disabled,
}) => (
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

export default function SkillSection({
  character,
  sectionData,
  skillData,
  setSkillData,
  getSkillsCount,
  isDisabled,
  style,
}) {
  const { sectionName, section, modifier, stringHash } = sectionData;

  const setSkill = (key, skillValue) => {
    const group = findGroup(skillData, key);
    const newSkillData = makeMutableCopy(skillData);
    const targetSkill = newSkillData[group][key];

    if (typeof targetSkill === "number") {
      newSkillData[group][key] = Number(skillValue);
    } else {
      newSkillData[group][key].general = Number(skillValue);
    }
    setSkillData(newSkillData);
  };

  const setSpecialty = (skillKey, specialtyKey, specialtyValue) => {
    const group = findGroup(skillData, skillKey);
    const newSkillData = makeMutableCopy(skillData);
    newSkillData[group][skillKey][specialtyKey] = specialtyValue;
    setSkillData(newSkillData);
  };

  const getSkillSectionModifier = () => {
    return character.characteristics
      ? Math.floor(character.characteristics[modifier] / 2)
      : 0;
  };

  const renderSkills = (skillHash, skillGroup) => {
    return Object.entries(skillHash).map(([skill, skillString]) => {
      if (!skillData[skillGroup][skill] || skill === "name") return null;

      const skillValue = skillData[skillGroup][skill];

      if (typeof skillValue === "number") {
        return (
          <SkillCountUp
            key={skill}
            skill={skill}
            skillString={skillString}
            skillPoint={skillValue}
            setSkill={setSkill}
            disabled={disabled}
          />
        );
      } else {
        return (
          <SpecialtyInputAndCountUp
            key={skill}
            primarySkill={skill}
            stringHash={skillString}
            list={skillValue}
            setSkill={setSkill}
            setSpecialty={setSpecialty}
            disabled={disabled}
          />
        );
      }
    });
  };

  const findGroup = (hash, targetItem) => {
    for (const group in hash) {
      if (targetItem in hash[group]) return group;
    }
  };

  const disabled = (skill, current, func) => {
    if (ignore.includes(skill)) return true;
    return isDisabled(current, func, getSkillsCount(), 100);
  };

  const modifierPoints = getSkillSectionModifier();

  return (
    <div style={{ ...style, maxWidth: "470px", marginBottom: "30px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5em",
          fontWeight: "bold",
          marginBottom: "3px",
        }}
      >
        {sectionName} Skills
      </h2>
      <div>
        {`${modifierPoints} ${
          modifierPoints > 1 ? "points" : "point"
        } will be added to these skills based on ${
          character.personalDetails.characterName
        }'s `}
        <strong>{modifier.toUpperCase()}</strong>
      </div>
      {renderSkills(stringHash, section)}
    </div>
  );
}
