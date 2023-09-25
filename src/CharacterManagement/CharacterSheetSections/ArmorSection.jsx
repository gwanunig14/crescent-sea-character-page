import React, { useState } from "react";
import ArmorDetail from "./ArmorDetail";

function ArmorSection({ armor }) {
  const [av, setAV] = useState(0);
  console.log(armor);

  const buildArmorViewsAndAddArmorValue = (armorList) => {
    let armVal = 0;
    let armorViews = [];
    Object.values(armorList).map((a) => {
      armVal = armVal + Number(a.av);
      armorViews.push(<ArmorDetail armor={a} />);
    });
    if (armVal !== av) {
      setAV(armVal);
    }
    return armorViews;
  };

  return (
    <div>
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
