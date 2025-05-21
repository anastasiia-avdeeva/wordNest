import { wordTableHeader, words } from "../../constants/constants";
import { HeaderTableRow } from "../HeaderTableRow/HeaderTableRow";
import { WordTableRow } from "../WordTableRow/WordTableRow";
import { WordEditableRow } from "../WordEditableRow/WordEditableRow";
import styles from "./WordTable.module.css";

export const WordTable = () => {
  const onEdit = 1;
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderTableRow array={wordTableHeader} />
      </thead>
      <tbody className={styles.table__body}>
        {words.map((word) =>
          word.id === onEdit ? (
            <WordEditableRow key={word.id} word={word} />
          ) : (
            <WordTableRow key={word.id} word={word} />
          )
        )}
      </tbody>
    </table>
  );
};
