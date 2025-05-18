import { wordTableHeader, words } from "../../constants/constants";
import { HeaderTableRow } from "../HeaderTableRow/HeaderTableRow";
import { WordTableRow } from "../WordTableRow/WordTableRow";
import styles from "./WordTable.module.css";

export const WordTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderTableRow array={wordTableHeader} />
      </thead>
      <tbody className={styles.table__body}>
        {words.map((word) => (
          <WordTableRow key={word.id} word={word} />
        ))}
      </tbody>
    </table>
  );
};
