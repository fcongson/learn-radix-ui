import { DropdownContent } from "../Dropdown";
import { XUIDropdownContext } from "./useXUIDropdownContext";
import styles from "./XUIDropdown.module.css";

export const XUIDropdown = ({ onSelect, children }) => {
  return (
    <DropdownContent className={styles.content}>
      <XUIDropdownContext.Provider value={{ onSelect }}>
        {children}
      </XUIDropdownContext.Provider>
    </DropdownContent>
  );
};
