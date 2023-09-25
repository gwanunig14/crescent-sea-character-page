import React from "react";

export default function ArmorDetail({ armor }) {
  return (
    <tr>
      {/* <td>{armor.name}</td> */}
      <td>{armor.type}</td>
      <td>{armor.av}</td>
    </tr>
  );
}
