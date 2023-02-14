import React from 'react';
import { SizeType } from '../../core/types/size';
import { ButtonStyles } from './styles';

type StitchesButtonProps = React.ComponentProps<typeof ButtonStyles>;

type ButtonSizes = SizeType | 'xl';

export type ButtonProps = {
  label: string;
  type?: string;
  disabled?: boolean;
  handleClick?: () => void;
  isDanger?: boolean;
  size?: ButtonSizes;
} & StitchesButtonProps;

const IonButton = ({
  type = 'primary',
  disabled = false,
  isDanger = false,
  size = 'md',
  label,
  handleClick,
}: ButtonProps) => {
  return (
    <ButtonStyles
      type={type}
      onClick={handleClick}
      disabled={disabled}
      danger={isDanger ? type : 'none'}
      size={size}
    >
      {label}
    </ButtonStyles>
  );
};

export default IonButton;
