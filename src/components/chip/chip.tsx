import { ChipStyle } from './styles';
import { SizeType } from '../../core/types/size';
import React from 'react';

export interface ChipProps {
  label: string;
  size?: SizeType;
  disabled?: boolean;
  selected?: boolean;
  handleClick?: () => void;
}

const IonChip = ({
  label,
  size = 'sm',
  disabled = false,
  selected = false,
  handleClick,
}: ChipProps) => {
  return (
    <ChipStyle
      size={size}
      disabled={disabled}
      selected={selected}
      onClick={handleClick}
      data-testid="ion-chip"
    >
      <span>{label}</span>
    </ChipStyle>
  );
};

export default IonChip;
