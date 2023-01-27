import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="btn">{label}</button>;
};

export default Button;
