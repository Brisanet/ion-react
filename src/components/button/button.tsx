import React from 'react';
import { StitchesButton } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof StitchesButton>;

export type ButtonProps = {
  label?: string;
  type: string;
  disabled?: boolean;
  onClick: () => void;
} & StitchesButtonProps;

const Button = ({ type, disabled, label, onClick }: ButtonProps) => {
  return (
    <StitchesButton disabled={disabled} type={type} onClick={onClick}>
      {label}
    </StitchesButton>
  );
};

export default Button;
