import { IconButton } from "./IconButton/IconButton";
import editBtn from "../assets/icons/editBtn.svg";
import removeBtn from "../assets/icons/removeBtn.svg";

export const WordCard = ({ word }) => {
  return (
    <div className="word-card">
      <h2 className="word-card__title">{word.word}</h2>
      <p className="word-card__description">{word.transcription}</p>
      <p className="word-card__description">{word.translation}</p>
      <p className="word-card__topic">{word.topic}</p>
      <div className="word-card__actions">
        <IconButton
          className="word-card__edit-btn"
          imgClass="word-card__edit-icon"
          icon={editBtn}
          alt="иконка кнопки изменить"
        />
        <IconButton
          className="word-card__remove-btn"
          imgClass="word-card__remove-icon"
          icon={removeBtn}
          alt="иконка кнопки удалить"
        />
      </div>
    </div>
  );
};
