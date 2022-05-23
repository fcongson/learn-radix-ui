import * as PopoverPrimitive from "@radix-ui/react-popover";
import { stylePrimitive } from "../utils/stylePrimitive";
import styles from "./Popover.module.css";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = stylePrimitive(
  PopoverPrimitive.Trigger,
  styles.trigger
);

export const PopoverContent = stylePrimitive(
  PopoverPrimitive.Content,
  styles.content
);

export const PopoverArrow = stylePrimitive(
  PopoverPrimitive.Arrow,
  styles.arrow
);

export const PopoverClose = stylePrimitive(
  PopoverPrimitive.Close,
  styles.close
);
