import { Dropdown, DropdownTrigger } from "../Dropdown";
import styles from "./XUIDropdown.module.css";

export const XUIDropdownToggled = ({ dropdown, trigger, onOpen }) => {
  const handleOnOpenChange = (open) => {
    if (open && onOpen) {
      onOpen();
    }
  };

  return (
    <Dropdown onOpenChange={handleOnOpenChange}>
      <DropdownTrigger className={styles.trigger}>{trigger}</DropdownTrigger>
      {dropdown}
    </Dropdown>
  );
};
