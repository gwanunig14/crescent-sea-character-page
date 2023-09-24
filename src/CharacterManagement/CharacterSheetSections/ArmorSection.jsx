import React, { useState } from "react";
import { GetDamageModifier } from "../../Tools/ReusableFunctions";
import WeaponDetail from "./WeaponDetail";
import ArmorDetail from "./ArmorDetail";

function ArmorSection({ armor }) {
  const [av, setAV] = useState(0);

  return (
    <div>
      <div
        style={{ borderBottom: "1px solid black" }}
        className={characterSheetStyleNames.title}
      >
        {`Armor Value: ${av}`}
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid black" }}>
            <td>Armor Name</td>
            <td>Armor Type</td>
            <td>AV</td>
          </tr>
          {Object.keys(armor).map((armor) => {
            setAV(av + armor.av);
            return <ArmorDetail armor={armor} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ArmorSection;
