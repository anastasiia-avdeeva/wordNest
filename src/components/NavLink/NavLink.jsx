import React from "react";

export const NavLink = ({ href, children }) => {
  return (
    <li className="nav__list-item">
      <a href={href} className="nav__link">
        {children}
      </a>
    </li>
  );
};
