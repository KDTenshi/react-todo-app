import { FC } from "react";

type IconType = "start" | "stop" | "complete" | "edit" | "delete";

interface IconProps {
  type: IconType;
  className?: string;
}

const icons: { [key in IconType]: string } = {
  start: "play_circle",
  stop: "cancel",
  complete: "check_circle",
  edit: "edit_note",
  delete: "delete",
};

const Icon: FC<IconProps> = ({ type, className = "" }) => {
  const iconClassName = `material-symbols-outlined ${className}`;

  return <span className={iconClassName}>{icons[type]}</span>;
};

export default Icon;
