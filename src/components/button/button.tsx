import React from 'react';
import IonIcon from '../icons/icons';
import { SizeType } from '../../core/types/size';
import { iconType } from '../icons/svgs/icons';
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
  icon?: iconType;
} & StitchesButtonProps;

const IonButton = ({
  type = 'primary',
  disabled = false,
  danger = false,
  size = 'md',
  icon,
  label,
  handleClick,
}: ButtonProps) => {
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  return (
    <ButtonStyles
      type={type}
      onClick={handleClick}
      disabled={disabled}
      danger={danger}
      size={size}
      withIcon={icon && true}
    >
      <div>
        {icon && <IonIcon type={icon} size={iconSize[`${size}`]} />}
        <span>{label}</span>
      </div>
    </ButtonStyles>
  );
};

export default IonButton;
