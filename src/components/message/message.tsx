import theme from '../../styles/theme';
import { IonIcon, IonIconProps } from '../icons';
import { Message } from './styles';

export type MessageTypes = 'success' | 'alert' | 'error' | 'warning' | 'info';

export interface IonMessageProps {
  message: string;
  type?: MessageTypes;
  customIcon?: Pick<IonIconProps, 'type' | 'color'>;
}

export const ICON_BY_TYPE: Record<
  MessageTypes,
  Pick<IonIconProps, 'type' | 'color'>
> = {
  success: { type: 'check-solid', color: theme.colors.positive[6] },
  alert: { type: 'attention-solid', color: theme.colors.negative[6] },
  error: { type: 'close-solid', color: theme.colors.negative[6] },
  warning: { type: 'attention-solid', color: theme.colors.warning[6] },
  info: { type: 'info-solid', color: theme.colors.info[6] },
};

export const IonMessage = ({
  type = 'info',
  message,
  customIcon,
}: IonMessageProps) => {
  const { type: icon, color } = ICON_BY_TYPE[type];

  return (
    <Message>
      <IonIcon
        size={24}
        type={customIcon?.type || icon}
        color={customIcon ? customIcon.color || '' : color}
      />
      <span>{message}</span>
    </Message>
  );
};
