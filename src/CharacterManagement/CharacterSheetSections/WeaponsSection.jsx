import React from "react";
import { GetDamageModifier } from "../../Tools/ReusableFunctions";
import WeaponDetail from "./WeaponDetail";

function WeaponsSection({ character, drinks }) {
  const { characteristics, skills, weapons } = character;
  const damageModifier = GetDamageModifier(characteristics);

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr style={{ borderBottom: "1px solid black" }}>
          <td>Weapon Name</td>
          <td>Weapon Type</td>
          <td>Skill</td>
          <td>%</td>
          <td>Damage</td>
          <td>Atk</td>
          <td>Special</td>
          <td>Range</td>
          <td>Hands</td>
          <td>HP</td>
          <td>Parry</td>
        </tr>
        {Object.keys(weapons).map((weapon) => (
          <WeaponDetail
            damageModifier={damageModifier}
            weapon={weapons[weapon]}
            drinks={drinks}
            characteristics={characteristics}
            skills={skills}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WeaponsSection;
