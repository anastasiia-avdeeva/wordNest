import classNames from "classnames";
import { NavLink } from "../NavLink/NavLink";
import styles from "./NavBar.module.css";

export const NavBar = ({ variant }) => {
  const navClass = classNames(styles.nav, variant && styles[`${variant}__nav`]);
  const lstClass = classNames(
    styles.nav__list,
    variant && styles[`${variant}__list`]
  );
  return (
    <nav className={navClass}>
      <ul className={lstClass}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/all-words">Все слова</NavLink>
        <NavLink href="/learned-words">Выученные слова</NavLink>
        <NavLink href="/training">Тренировка</NavLink>
      </ul>
    </nav>
  );
};
