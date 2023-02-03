import React from 'react';
import { StitchesButton } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof StitchesButton>;

export type ButtonProps = { label?: string } & StitchesButtonProps;

const Button = ({ type, label }: ButtonProps) => {
  return <StitchesButton type={type}>{label}</StitchesButton>;
};

export default Button;
