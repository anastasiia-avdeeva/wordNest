import { TextButton } from "../TextButton/TextButton";
import styles from "./ActionsTableCell.module.css";

export const ActionsTableCell = () => {
  return (
    <div className={styles.table__buttons}>
      <TextButton variant="edit-button">Редактировать</TextButton>
      <TextButton variant="del-button">Удалить</TextButton>
    </div>
  );
};
