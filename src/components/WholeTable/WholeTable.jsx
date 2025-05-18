import { HeaderTableRow } from "../HeaderTableRow/HeaderTableRow";
import { TableRow } from "../TableRow/TableRow";

export const WholeTable = ({ headerArr, mainArr }) => {
  return (
    <table>
      <thead className="table__header">
        <HeaderTableRow array={headerArr} />
      </thead>
      <tbody>
        {mainArr.map((obj) => (
          <TableRow key={obj.id} obj={obj} />
        ))}
      </tbody>
    </table>
  );
};
