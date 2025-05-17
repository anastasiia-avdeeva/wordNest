import classNames from "classnames";
import styles from "./IconButton.module.css";

export const IconButton = ({ variant, icon, alt }) => {
  const buttonClass = classNames(styles.button, { [styles[variant]]: variant });

  return (
    <button className={buttonClass}>
      <img src={icon} alt={alt} className={styles.button__icon} />
    </button>
  );
};
