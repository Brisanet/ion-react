import { ChipStyle } from './styles';
import { SizeType } from '../../core/types/size';
import { IonIcon } from '../icons/icons';
import { IconType } from '../icons/svgs/icons';
import React from 'react';

type ChipSizes = Extract<SizeType, 'sm' | 'md'>;

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
    <ChipStyle
      size={size}
      disabled={disabled}
      selected={selected}
      onClick={handleClick}
      data-testid='ion-chip'
    >
      <div>
        {icon ? <IonIcon type={icon} size={iconSize[size]} /> : null}
        <span>{label}</span>
      </div>
    </ChipStyle>
  );
};
