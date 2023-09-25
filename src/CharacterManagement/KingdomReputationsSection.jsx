import React from "react";
import "../styles/characterSheet.scss";
import { characterSheetStyleNames } from "../Tools/StyleNames";
import { KingdomStrings } from "../Tools/Strings";

export default function KingdomReputationsSection({ kingdomReputations }) {
  return (
    <>
      <div
        style={{ paddingTop: "30px" }}
        className={characterSheetStyleNames.title}
      >
        Kingdom Reputations
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderTop: "1px solid black",
          padding: "8px",
          height: "38px",
        }}
      >
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            {Object.keys(kingdomReputations).map((rep) => (
              <td style={{ maxWidth: "170px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "8px",
                  }}
                >
                  {KingdomStrings[rep]}
                </div>
                <div>{kingdomReputations[rep]}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
