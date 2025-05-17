import { NavLink } from "../NavLink/NavLink";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/all-words">Все слова</NavLink>
        <NavLink href="/learned-words">Выученные слова</NavLink>
        <NavLink href="/training">Тренировка</NavLink>
      </ul>
    </nav>
  );
};
