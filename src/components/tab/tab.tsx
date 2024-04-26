import { BorderDirection } from '../../core/types/directions';
import { SizeType } from '../../core/types/size';
import { BadgeProps, IonBadge } from '../badge/badge';
import { IonIcon } from '../icons/icons';
import { iconType } from '../icons/svgs/icons';
import { Tab } from './styles';

export type TabSizes = Exclude<SizeType, 'xs'>;

export type TabProps = {
  label: string;
  direction?: BorderDirection;
  size?: TabSizes;
  selected?: boolean;
  disabled?: boolean;
  icon?: IconType;
  badge?: BadgeProps;
  handleClick?: () => void;
};

export const IonTab = ({
  label,
  icon,
  size = 'sm',
  direction = 'bottom',
  selected = false,
  disabled = false,
  handleClick,
  badge,
}: TabProps) => {
  const getIconSize = (size: TabSizes) =>
    ({
      sm: 16,
      md: 20,
      lg: 24,
    }[size]);

  return (
    <Tab
      data-testid='ion-tab'
      $size={size}
      $direction={direction}
      $selected={selected}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon && <IonIcon type={icon} size={getIconSize(size)} />}
      <span>{label}</span>
      {badge && <IonBadge label={badge.label} type={badge.type} />}
    </Tab>
  );
};
