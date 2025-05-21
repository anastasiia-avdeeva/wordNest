import { SiteLogo } from "../SiteLogo/SiteLogo";
import { NavBar } from "../NavBar/NavBar";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import logo from "../../assets/icons/logo.svg";
import styles from "./SiteHeader.module.css";
// import logo2 from "../../assets/icons/logo2.svg";
// import logo3 from "../../assets/icons/logo3.svg";

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__first-line"]}>
        <SiteLogo variant="header__logo" icon={logo} />
        <NavBar variant="header" />
        <SearchPanel inputId="headerSearch" inputName="headerSearch" />
      </div>
    </header>
  );
};
