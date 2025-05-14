import React from "react";
import { SiteLogo } from "./SiteLogo";
import { NavBar } from "./NavBar";
import { SearchPanel } from "./SearchPanel";

export const SiteHeader = () => {
  return (
    <div className="header">
      <SiteLogo className="header__logo-container" imgClass="header__logo" />
      <NavBar className="header__nav" linkClass="header__link" />
      <SearchPanel inputId="headerSearch" inputName="headerSearch" />
    </div>
  );
};
