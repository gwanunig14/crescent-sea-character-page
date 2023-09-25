import React from "react";
import "../../styles/characterSheet.scss";
import PersonalDetailsSection from "./PersonalDetailsSection";
import CharacteristicsSection from "./CharacteristicsSection";
import { characterSheetStyleNames } from "../../Tools/StyleNames";
import CounterSection from "../CounterSection";

export default function CharacterDetailsSection({
  personalDetails,
  characteristics,
  addToPostGameCheckList,
  drinkCounter,
  confirmation,
  maxHitPoints,
  magicActivated,
  adjustDrinks,
}) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "30px",
      }}
    >
      <tbody>
        <tr
          className={characterSheetStyleNames.skillCategoryRow}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <td>
            <div className={characterSheetStyleNames.title}>Personal</div>
            <div className={characterSheetStyleNames.box}>
              <PersonalDetailsSection personalData={personalDetails} />
            </div>
          </td>
          <td>
            <div>
              <div className={characterSheetStyleNames.title}>
                Characteristics
              </div>
              <div
                className={`${characterSheetStyleNames.box} characteristics`}
              >
                <CharacteristicsSection
                  characteristics={characteristics}
                  postGameCheck={addToPostGameCheckList}
                  drinks={drinkCounter}
                  confirmation={confirmation}
                />
              </div>
            </div>
          </td>
          <CounterSection
            maxHitPoints={maxHitPoints}
            power={characteristics.power}
            magicActivated={magicActivated}
            drinkCounter={drinkCounter}
            adjustDrinks={adjustDrinks}
            confirmation={confirmation}
          />
        </tr>
      </tbody>
    </table>
  );
}
