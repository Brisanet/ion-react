import { IonIcon } from '../icons';
import { IconType } from '../icons/svgs/icons';
import { Badge, Dot, DotContainer } from './styles';

export type LabelType = string | number;

export type BadgeType = 'primary' | 'secondary' | 'neutral' | 'danger';

export type BadgeStatus =
  | 'primary'
  | 'negative'
  | 'positive'
  | 'warning'
  | 'info';

export type BadgeDotSizes = 'xs' | 'sm' | 'md';

export type BadgeProps = {
  label?: LabelType;
  type?: BadgeType;
  dot?: boolean;
  icon?: IconType;
  size?: BadgeDotSizes;
  status?: BadgeStatus;
  customColor?: string;
};

const ICON_SIZE = {
  xs: 0,
  sm: 12,
  md: 16,
};

const DEFAULT_ICON_COLOR = '#FCFCFD';

export const IonBadge = ({
  label,
  type = 'primary',
  dot = false,
  icon,
  size = 'xs',
  status = 'primary',
  customColor,
}: BadgeProps) => {
  const display =
    typeof label === 'number' ? (label >= 100 ? '99+' : label) : label;
  const showIcon = !!icon && size !== 'xs';
  const showLabel = label && (!icon || size === 'xs');

  if (dot) {
    return (
      <DotContainer>
        <Dot
          $status={status}
          $size={ICON_SIZE[size]}
          $hasIcon={showIcon}
          $customColor={customColor}
          data-testid='ion-dot-badge'
        >
          {showIcon && (
            <IonIcon
              type={icon}
              size={ICON_SIZE[size]}
              color={DEFAULT_ICON_COLOR}
            />
          )}
        </Dot>
        {showLabel && <span>{label}</span>}
      </DotContainer>
    );
  }

  return (
    <Badge $type={type} data-testid='ion-badge'>
      {display}
    </Badge>
  );
};
