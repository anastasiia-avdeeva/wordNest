import React from "react";
import logo from "../assets/icons/logo.svg";

export const SiteLogo = ({ className, imgClass }) => {
  return (
    <div className={className}>
      <img src={logo} alt="логотип" className={imgClass} />
    </div>
  );
};
