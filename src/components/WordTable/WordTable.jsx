import { wordTableHeader, words } from "../../constants/constants";
import { HeaderTableRow } from "../HeaderTableRow/HeaderTableRow";
import { WordTableRow } from "../WordTableRow/WordTableRow";
import { WordEditableRow } from "../WordEditableRow/WordEditableRow";
import { sortByName } from "../../utils/stringUtils";
import styles from "./WordTable.module.css";

export const WordTable = () => {
  const onEdit = 1;
  const sortedWords = sortByName(words);
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderTableRow array={wordTableHeader} />
      </thead>
      <tbody className={styles.table__body}>
        {sortedWords.map((word) =>
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
