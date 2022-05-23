import { Separator } from "@radix-ui/react-dropdown-menu";
import { DropdownContent } from "../Dropdown";
import { XUIDropdownContext } from "./useXUIDropdownContext";
import styles from "./XUIDropdown.module.css";

export const XUIDropdown = ({ header, footer, onSelect, children }) => {
  return (
    <DropdownContent className={styles.content}>
      {header && (
        <>
          {header}
          <Separator className={styles.separator} />
        </>
      )}
      <XUIDropdownContext.Provider value={{ onSelect }}>
        {children}
      </XUIDropdownContext.Provider>
      {footer && (
        <>
          <Separator className={styles.separator} />
          {footer}
        </>
      )}
    </DropdownContent>
  );
};
