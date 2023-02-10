import React from 'react';
import { ButtonStyles } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof ButtonStyles>;

export type ButtonProps = {
  label: string;
  type?: string;
  disabled?: boolean;
  handleClick?: () => void;
  isDanger?: boolean;
} & StitchesButtonProps;

const IonButton = ({
  type = 'primary',
  disabled = false,
  isDanger = false,
  handleClick,
  label,
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={type}
      onClick={handleClick}
      disabled={disabled}
      danger={isDanger ? type : 'none'}
    >
      {label}
    </ButtonStyles>
  );
};

export default IonButton;
