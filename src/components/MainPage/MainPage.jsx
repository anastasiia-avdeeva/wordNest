import { WordTable } from "../WordTable/WordTable";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <WordTable />
    </main>
  );
};
