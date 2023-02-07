import { SizeType } from '../../core/types/size';
import { ChipStyle } from './styles';

export interface ChipProps {
  label: string;
  size?: SizeType;
  disabled?: boolean;
  selected?: boolean;
}

const IonChip = ({
  label,
  size = 'sm',
  disabled = false,
  selected = false,
}: ChipProps) => {
  return (
    <ChipStyle size={size} disabled={disabled} selected={selected}>
      <span>{label}</span>
    </ChipStyle>
  );
};

export default IonChip;
