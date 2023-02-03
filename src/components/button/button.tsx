import React from 'react';
import { StitchesButton } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof StitchesButton>;

export type ButtonProps = {
  label?: string;
  type: string;
  disabled?: boolean;
} & StitchesButtonProps;

const Button = ({ type, disabled, label }: ButtonProps) => {
  return (
    <StitchesButton disabled={disabled} type={type}>
      {label}
    </StitchesButton>
  );
};

export default Button;
