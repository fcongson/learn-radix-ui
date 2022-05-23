import { CheckboxItem, ItemIndicator } from "@radix-ui/react-dropdown-menu";
import { useContext } from "react";
import { DropdownItem } from "../Dropdown";
import { XUIDropdownContext } from "./useXUIDropdownContext";
import styles from "./XUIDropdown.module.css";

export const XUIPicklist = ({ children }) => children;

export const XUIPickitem = ({
  checked,
  onCheckedChange,
  isSelected,
  isMultiSelect,
  children,
}) => {
  const { onSelect } = useContext(XUIDropdownContext);
  const handleOnSelect = (event) => {
    if (onSelect) {
      onSelect(event.target.innerText);
    }
  };
  return isMultiSelect ? (
    <CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      onSelect={handleOnSelect}
      className={styles.item}
    >
      <ItemIndicator>✔️</ItemIndicator>
      checkbox {children}
    </CheckboxItem>
  ) : (
    <DropdownItem className={styles.item} onSelect={handleOnSelect}>
      {children}
    </DropdownItem>
  );
};
