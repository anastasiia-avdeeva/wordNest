import { TextButton } from "../TextButton/TextButton";

export const TableRow = ({ obj }) => {
  const { id, ...objWithoutId } = obj;
  return (
    <tr className="table__row">
      {Object.values(objWithoutId).map((value, index) => (
        <td key={index} className="table__cell">
          {value}
        </td>
      ))}
      <td className="table__cell">
        <div className="buttons">
          <TextButton>Редактировать</TextButton>
          <TextButton>Удалить</TextButton>
        </div>
      </td>
    </tr>
  );
};
