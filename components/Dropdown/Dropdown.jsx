import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { stylePrimitive } from "../utils/stylePrimitive";
import styles from "./Dropdown.module.css";

export const Dropdown = DropdownPrimitive.Root;

export const DropdownTrigger = stylePrimitive(
  DropdownPrimitive.Trigger,
  styles.trigger
);

export const DropdownContent = stylePrimitive(
  DropdownPrimitive.Content,
  styles.content
);

export const DropdownItem = stylePrimitive(DropdownPrimitive.Item, styles.item);

export const DropdownTriggerItem = stylePrimitive(
  DropdownPrimitive.TriggerItem,
  styles["trigger-item"]
);
