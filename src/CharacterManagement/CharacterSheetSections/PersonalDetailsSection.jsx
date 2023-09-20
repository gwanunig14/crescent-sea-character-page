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
    startingProfession,
    wealth,
    religion,
    distinctiveFeatures,
    age,
  } = personalData;

  return (
    <table>
      <tbody>
        <tr className={characterSheetStyleNames.ptr}>
          <td>
            <div>Race:</div>
          </td>
          <td className={characterSheetStyleNames.ptrd}>{RaceStrings[race]}</td>
          <td>Gender:</td>
          <td>{GenderStrings[gender]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td>
            <div>Age:</div>
          </td>
          <td className={characterSheetStyleNames.ptrd}>{age}</td>
          <td>Wealth:</td>
          <td>{WealthStrings[wealth]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>
            <div>Profession:</div>
          </td>
          <td colSpan={2}>{startingProfession}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>
            <div>Birth Kingdom:</div>
          </td>
          <td colSpan={2}>{KingdomStrings[kingdomBirth]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>
            <div>Kingdom Loyalty:</div>
          </td>
          <td colSpan={2}>{KingdomStrings[kingdomLoyalty]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td colSpan={2}>
            <div>Religion:</div>
          </td>
          <td colSpan={2}>{ReligionStrings[religion]}</td>
        </tr>
        <tr className={characterSheetStyleNames.ptr}>
          <td
            style={{
              verticalAlign: "top",
            }}
            colSpan={2}
          >
            Distinctive Features:
          </td>
          <td className={characterSheetStyleNames.distinctiv} colSpan={2}>
            <div>
              {distinctiveFeatures.map((f, i) => {
                return i === distinctiveFeatures.length - 1
                  ? `${f} `
                  : `${f}, `;
              })}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PersonalDetailsSection;
