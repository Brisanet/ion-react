import React from 'react';
import { SizeType } from '../../core/types/size';
import { ButtonStyles } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof ButtonStyles>;

type ButtonSizes = Exclude<SizeType, 'xs'> | 'xl';

export type ButtonProps = {
  label: string;
  type?: string;
  disabled?: boolean;
  handleClick?: () => void;
  danger?: boolean;
  size?: ButtonSizes;
} & StitchesButtonProps;

const IonButton = ({
  type = 'primary',
  disabled = false,
  danger = false,
  size = 'md',
  label,
  handleClick,
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={type}
      onClick={handleClick}
      disabled={disabled}
      danger={danger}
      size={size}
    >
      {label}
    </ButtonStyles>
  );
};

export default IonButton;
