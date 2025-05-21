import { ActionsTableCell } from "../ActionsTableCell/ActionsTableCell";
import cellStyles from "../WordTableRow/WordTableRow.module.css";
import inputStyles from "./WordEditableRow.module.css";
import { capitalizeStr } from "../../utils/stringUtils";

export const WordEditableRow = ({ word }) => {
  return (
    <tr className={cellStyles.table__row}>
      <td className={cellStyles.table__cell}>{capitalizeStr(word.word)}</td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTranscription"
          id="wordTranscription"
          className={inputStyles.table__input}
          placeholder="Транскрипция"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTranslation"
          id="wordTranslation"
          className={inputStyles.table__input}
          placeholder="Перевод"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTheme"
          id="wordTheme"
          className={inputStyles.table__input}
          placeholder="Тема"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <ActionsTableCell btnText1="Сохранить" btnText2="Отменить" />
      </td>
    </tr>
  );
};
