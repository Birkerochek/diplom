export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "tag" | "delete";
  color?: "primary" | "white";
  tagColor?: "white" | "red" | "outline";
  size?: "normal" | "big";
  icon?: "edit" | "settings" | "plus" | "message" | "delete" | "close";
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  direction?: "ltr" | "rtl";
}
