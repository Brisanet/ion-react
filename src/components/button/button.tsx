import { ButtonHTMLAttributes } from 'react';
import { SizeType } from '../../core/types/size';
import { IonIcon } from '../icons';
import { IconType } from '../icons/svgs/icons';
import { Button } from './styles';

export type ButtonSizes = Exclude<SizeType, 'xs'> | 'xl';

export type ButtonVariants = 'primary' | 'secondary' | 'ghost' | 'dashed';

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariants;
  danger?: boolean;
  size?: ButtonSizes;
  icon?: IconType;
  iconOnRight?: boolean;
  circular?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IonButton = ({
  variant = 'primary',
  danger = false,
  size = 'md',
  circular = false,
  icon,
  iconOnRight,
  label,
  ...props
}: ButtonProps) => {
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  return (
    <Button
      data-testid='ion-button'
      $variant={variant}
      $size={size}
      $danger={danger}
      $hasIcon={!!icon}
      $hasLabel={!!label}
      $iconOnRight={iconOnRight}
      $circular={circular}
      {...props}
    >
      {icon && <IonIcon type={icon} size={iconSize[size]} />}
      {label && <span>{label}</span>}
    </Button>
  );
};
