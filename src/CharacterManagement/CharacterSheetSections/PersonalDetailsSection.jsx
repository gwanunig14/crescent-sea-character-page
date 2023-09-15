import React from "react";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  WealthStrings,
  ReligionStrings,
} from "../../Tools/Strings";
import { characterSheetStyleNames } from "../../Tools/StyleNames";

function PersonalDetailsSection({ personalData }) {
  const {
    race,
    gender,
    kingdomBirth,
    kingdomLoyalty,
    height,
    weight,
    startingProfession,
    wealth,
    religion,
    distinctiveFeatures,
    age,
  } = personalData;

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td>Race:</td>
          <td className={characterSheetStyleNames.ptrd}>{RaceStrings[race]}</td>
          <td>Gender:</td>
          <td>{GenderStrings[gender]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td>Height:</td>
          <td className={characterSheetStyleNames.ptrd}>{height}</td>
          <td>Weight:</td>
          <td>{weight}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td>Age:</td>
          <td className={characterSheetStyleNames.ptrd}>{age}</td>
          <td>Wealth:</td>
          <td>{WealthStrings[wealth]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>Profession:</td>
          <td colSpan={2}>{startingProfession}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>Birth Kingdom:</td>
          <td colSpan={2}>{KingdomStrings[kingdomBirth]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>Kingdom Loyalty:</td>
          <td colSpan={2}>{KingdomStrings[kingdomLoyalty]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>Religion:</td>
          <td colSpan={2}>{ReligionStrings[religion]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>Distinctive Features:</td>
          <td colSpan={2}>
            {distinctiveFeatures.map((f, i) => {
              return i === distinctiveFeatures.length - 1 ? `${f} ` : `${f}, `;
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PersonalDetailsSection;
