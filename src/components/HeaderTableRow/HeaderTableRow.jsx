import React from "react";

export const HeaderTableRow = ({ array }) => {
  return (
    <tr className="table__header-row">
      {array.map((item, index) => (
        <th key={index} className="table__header-cell">
          {item}
        </th>
      ))}
    </tr>
  );
};
