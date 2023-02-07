import { SizeType } from '../../core/types/size';
import { ChipStyle } from './styles';

export interface ChipProps {
  label: string;
  size: SizeType;
}

const IonChip = ({ label, size = 'sm' }: ChipProps) => {
  return (
    <ChipStyle size={size}>
      <span>{label}</span>
    </ChipStyle>
  );
};

export default IonChip;
