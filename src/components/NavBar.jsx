import React from "react";

export const NavBar = ({ className, linkClass }) => {
  return (
    <nav className={className}>
      <a href="/" className={linkClass}>
        Главная
      </a>
      <a href="/all-words" className={linkClass}>
        Все слова
      </a>
      <a href="/all-words" className={linkClass}>
        Выученные слова
      </a>
      <a href="/training" className={linkClass}>
        Тренировка
      </a>
    </nav>
  );
};
