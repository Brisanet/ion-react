import React, { InputHTMLAttributes } from 'react';
import { StitcheButton } from './styles';
export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <StitcheButton>{label}</StitcheButton>
    </>
  );
};

export default Button;
