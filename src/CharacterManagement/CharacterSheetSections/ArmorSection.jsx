import React, { useState } from "react";
import { characterSheetStyleNames } from "../../Tools/StyleNames";
import ArmorDetail from "./ArmorDetail";

function ArmorSection({ armor }) {
  const [av, setAV] = useState(0);

  const buildArmorViewsAndAddArmorValue = (armorList) => {
    let armVal = 0;
    let armorViews = [];
    Object.values(armorList).forEach((a, i) => {
      armVal = armVal + Number(a.av);
      armorViews.push(<ArmorDetail key={i} armor={a} />);
    });
    if (armVal !== av) {
      setAV(armVal);
    }
    return armorViews;
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      <div
        style={{ borderBottom: "1px solid black" }}
        className={characterSheetStyleNames.title}
      >
        Armor
      </div>
      <div style={{ borderBottom: "1px solid black" }}>
        {`Armor Value: ${av}`}
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid black" }}>
            {/* <td>Armor Name</td> */}
            <td>Armor Type</td>
            <td>AV</td>
          </tr>
          {buildArmorViewsAndAddArmorValue(armor)}
        </tbody>
      </table>
    </div>
  );
}

export default ArmorSection;
