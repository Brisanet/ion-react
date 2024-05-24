import theme from '../../../styles/theme';

import { IonIcon, IonIconProps } from '../../icons';

export type FeedbackTypes = 'success' | 'alert' | 'error' | 'warning' | 'info';

export interface FeedbackIconProps {
  type: FeedbackTypes;
  customIcon?: Pick<IonIconProps, 'type' | 'color'>;
}

export const ICON_BY_TYPE: Record<
  FeedbackTypes,
  Pick<IonIconProps, 'type' | 'color'>
> = {
  success: { type: 'check-solid', color: theme.colors.positive[6] },
  alert: { type: 'attention-solid', color: theme.colors.negative[6] },
  error: { type: 'close-solid', color: theme.colors.negative[6] },
  warning: { type: 'attention-solid', color: theme.colors.warning[6] },
  info: { type: 'info-solid', color: theme.colors.info[6] },
};

export const FeedbackIcon = ({ type, customIcon }: FeedbackIconProps) => {
  const { type: icon, color } = ICON_BY_TYPE[type];

  return (
    <IonIcon
      size={24}
      type={customIcon?.type || icon}
      color={customIcon ? customIcon.color || '' : color}
    />
  );
};
