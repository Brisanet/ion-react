import { ChipStyle } from './styles';
import { SizeType } from '../../core/types/size';
import IonIcon from '../icons/icons';
import { iconType } from '../icons/svgs/icons';
import React from 'react';

export interface ChipProps {
  label: string;
  size?: SizeType;
  disabled?: boolean;
  selected?: boolean;
  icon?: iconType;
  handleClick?: () => void;
}

const IonChip = ({
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
      data-testid="ion-chip"
    >
      <div>
        {icon ? <IonIcon type={icon} size={iconSize[size]} /> : null}
        <span>{label}</span>
      </div>
    </ChipStyle>
  );
};

export default IonChip;
