import React from 'react';
import { ButtonStyles } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof ButtonStyles>;

export type ButtonProps = {
  label?: string;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
  danger?: boolean;
} & StitchesButtonProps;

const IonButton = ({
  type = 'primary',
  disabled,
  onClick,
  danger,
  label,
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${danger && 'danger'}`}
    >
      {label}
    </ButtonStyles>
  );
};

export default IonButton;
