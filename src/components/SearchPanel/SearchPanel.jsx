import { IconButton } from "../IconButton/IconButton";
import searchIcon from "../../assets/icons/searchIcon2.svg";
import styles from "./SearchPanel.module.css";

export const SearchPanel = ({ inputId, inputName }) => {
  return (
    <div className={styles["search-panel"]}>
      <input
        className={styles["search-panel__input"]}
        type="text"
        placeholder="Поиск"
        name={inputName}
        id={inputId}
      />
      <IconButton variant="search-button" icon={searchIcon} alt="иконка лупы" />
    </div>
  );
};
