import { TextButton } from "../TextButton/TextButton";
import styles from "./ActionsTableCell.module.css";

export const ActionsTableCell = ({ btnText1, btnText2 }) => {
  return (
    <div className={styles.table__buttons}>
      <TextButton variant="edit-button">{btnText1}</TextButton>
      <TextButton variant="del-button">{btnText2}</TextButton>
    </div>
  );
};
