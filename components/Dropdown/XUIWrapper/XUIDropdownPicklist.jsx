import { useContext } from "react";
import { DropdownItem } from "../Dropdown";
import { XUIDropdownContext } from "./useXUIDropdownContext";
import styles from "./XUIDropdown.module.css";

export const XUIPicklist = ({ children }) => children;

export const XUIPickitem = ({ isSelected, children }) => {
  const { onSelect } = useContext(XUIDropdownContext);
  const handleOnSelect = (event) => {
    if (onSelect) {
      onSelect(event.target.innerText);
    }
  };
  return (
    <DropdownItem className={styles.item} onSelect={handleOnSelect}>
      {children}
    </DropdownItem>
  );
};
