import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

type TColor = "red" | "green" | "blue";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: TColor;
}

const colorsClassNames: { [key in TColor]: string } = {
  blue: style.Button_Blue,
  red: style.Button_Red,
  green: style.Button_Green,
};

const Button: FC<ButtonProps> = ({ color, ...restProps }) => {
  return <button className={color ? colorsClassNames[color] : style.Button} {...restProps}></button>;
};

export default Button;
