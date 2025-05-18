import styles from "./HeaderTableRow.module.css";
import { capitalizeStr } from "../../utils/stringUtils";

export const HeaderTableRow = ({ array }) => {
  return (
    <tr className={styles["table__header-row"]}>
      {array.map((item, index) => (
        <th key={index} className={styles["table__header-cell"]}>
          {capitalizeStr(item)}
        </th>
      ))}
    </tr>
  );
};
