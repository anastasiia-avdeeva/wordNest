import { WholeTable } from "../WholeTable/WholeTable";
import { wordTableHeader, words } from "../../constants/constants";

export const WordTable = () => {
  return <WholeTable headerArr={wordTableHeader} mainArr={words} />;
};
