import React from "react";
import { IconButton } from "./IconButton";
import searchIcon from "../assets/icons/searchIcon2.svg";

export const SearchPanel = ({ inputId, inputName }) => {
  return (
    <div className="search-panel">
      <input
        className="search-panel__input"
        type="text"
        name={inputName}
        id={inputId}
      />
      <IconButton
        className="search-panel__btn"
        imgClass="search-panel__icon"
        icon={searchIcon}
        alt="иконка лупы"
      />
    </div>
  );
};
