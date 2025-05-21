import { TextButton } from "../TextButton/TextButton";
import styles from "./WordTableRow.module.css";
import { capitalizeStr } from "../../utils/stringUtils";

export const WordTableRow = ({ word }) => {
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__cell}>{capitalizeStr(word.word)}</td>
      <td className={styles.table__cell}>
        {capitalizeStr(word.transcription)}
      </td>
      <td className={styles.table__cell}>{capitalizeStr(word.translation)}</td>
      <td className={styles.table__cell}>{capitalizeStr(word.theme)}</td>
      <td className={styles.table__cell}>
        <div className={styles.table__buttons}>
          <TextButton>Редактировать</TextButton>
          <TextButton>Удалить</TextButton>
        </div>
      </td>
    </tr>
  );
};

// export const TableRow = ({ obj }) => {
//   const { id, ...objWithoutId } = obj;
//   return (
//     <tr className="table__row">
//       {Object.values(objWithoutId).map((value, index) => (
//         <td key={index} className="table__cell">
//           {value}
//         </td>
//       ))}
//       <td className="table__cell-btns">
//         <TextButton>Редактировать</TextButton>
//         <TextButton>Удалить</TextButton>
//       </td>
//     </tr>
//   );
// };
