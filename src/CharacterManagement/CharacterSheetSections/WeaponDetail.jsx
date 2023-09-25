import React from "react";
import { CombatStrings } from "../../Tools/Strings";
import { digIn } from "../../Tools/ReusableFunctions";

export default function WeaponDetail({
  damageModifier,
  weapon,
  characteristics,
  skills,
  drinks,
}) {
  const successModifier = Math.floor(characteristics.dexterity / 2);
  let success = 0;
  success = digIn(skills, weapon.skill).object;
  success = success - drinks;
  success = success + successModifier < 99 ? success + successModifier : 99;
  return (
    <tr>
      {/* <td>{weapon.name}</td> */}
      <td>{weapon.type}</td>
      <td>{digIn(CombatStrings, weapon.skill).object}</td>
      <td>{success}</td>
      <td>
        {weapon.modifier
          ? `${weapon.damage} + ${damageModifier}`
          : `${weapon.damage}`}
      </td>
      <td>{weapon.attack}</td>
      <td>{weapon.special}</td>
      <td>{weapon.range}</td>
      <td>{weapon.hands}</td>
      <td>{weapon.hitPoints}</td>
      <td>{weapon.parry}</td>
    </tr>
  );
}
