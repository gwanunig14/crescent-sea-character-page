import React from "react";
import { characterSheetStyleNames } from "../../Tools/StyleNames";
import ShieldDetail from "./ShieldDetail";

function ShieldSection({ shields, skill }) {
  return (
    <div>
      <div
        style={{ borderBottom: "1px solid black" }}
        className={characterSheetStyleNames.title}
      >
        Shield
      </div>
      <div style={{ borderBottom: "1px solid black" }}>Shield</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid black" }}>
            {/* <td>Shield Name</td> */}
            <td>Shield Type</td>
            <td>%</td>
            <td>AV/HP</td>
            <td>Damage</td>
            <td>Atk</td>
            <td>Special</td>
          </tr>
          {Object.values(shields).map((shield) => {
            return <ShieldDetail shield={shield} skill={skill} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShieldSection;
