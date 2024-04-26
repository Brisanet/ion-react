import { SizeType } from '../../core/types/size';
import { IonIcon } from '../icons/icons';
import { IconType } from '../icons/svgs/icons';
import { Chip } from './styles';

export type ChipSizes = Extract<SizeType, 'sm' | 'md'>;

export interface ChipProps {
  label: string;
  size?: ChipSizes;
  disabled?: boolean;
  selected?: boolean;
  icon?: IconType;
  handleClick?: () => void;
}

export const IonChip = ({
  label,
  size = 'sm',
  disabled = false,
  selected = false,
  icon,
  handleClick,
}: ChipProps) => {
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xs: 28,
  };

  return (
    <Chip
      data-testid='ion-chip'
      $size={size}
      $selected={selected}
      disabled={disabled}
      onClick={handleClick}
    >
      {!!icon && <IonIcon type={icon} size={iconSize[size]} />}
      <span>{label}</span>
    </Chip>
  );
};
