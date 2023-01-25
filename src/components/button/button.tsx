import React from "react";
import "./styles.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="btn">{props.label}</button>;
};

export default Button;
