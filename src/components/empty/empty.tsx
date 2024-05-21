import { IonIcon } from '../icons';
import { IconType } from '../icons/svgs/icons';
import { Empty } from './styles';

const DEFAULT_ICON_SIZE = 16;

export interface EmptyProps {
  icon?: IconType;
  label?: string;
}

export const IonEmpty = ({
  icon = 'attention-rounded',
  label = 'Sem dados',
}: EmptyProps) => {
  return (
    <Empty>
      <IonIcon type={icon} size={DEFAULT_ICON_SIZE} />
      <span>{label}</span>
    </Empty>
  );
};
