import { ButtonHTMLAttributes } from 'react';
import { SizeType } from '../../core/types/size';
import { IonIcon } from '../icons';
import { IconType } from '../icons/svgs/icons';
import { IonSpinner } from '../spinner';
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
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ICON_SIZE = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 24,
};

export const IonButton = ({
  variant = 'primary',
  danger = false,
  size = 'md',
  circular = false,
  icon,
  iconOnRight,
  label,
  loading,
  ...props
}: ButtonProps) => {
  const loadingVariant = () => {
    if (danger && variant !== 'primary') return 'danger';
    if (variant === 'primary') return 'secondary';
    return 'primary';
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
      $loading={loading}
      {...props}
    >
      {loading ? (
        <IonSpinner variant={loadingVariant()} size={ICON_SIZE[size]} />
      ) : (
        icon && <IonIcon type={icon} size={ICON_SIZE[size]} />
      )}
      {label && <span>{label}</span>}
    </Button>
  );
};
