import React from "react";

export default function ShieldDetail({ shield, skill }) {
  return (
    <tr>
      {/* <td>{shield.name}</td> */}
      <td>{shield.type}</td>
      <td>{skill}</td>
      <td>{shield.av}</td>
      <td>{shield.damage}</td>
      <td>{shield.attack}</td>
      <td>{shield.special}</td>
    </tr>
  );
}
