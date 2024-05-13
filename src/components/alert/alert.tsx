import { StatusType } from '../../core/types/status';
import { IonButton } from '../button';
import ErrorBoundary from '../error/error-boundary';

import { IonIcon } from '../icons/icons';
import isValidLabel from '../utils/isValidLabel';
import { Alert, Wrapper } from './styled';
import { IconType } from '../icons/svgs/icons';

export interface AlertProps {
  message: string;
  type?: StatusType;
  closable?: boolean;
  hideBackground?: boolean;
  onClose?: () => void;
}

type iconType =
  | 'check-solid'
  | 'exclamation-solid'
  | 'info-solid'
  | 'close-solid';

const icons: Record<StatusType, IconType> = {
  info: 'info-solid',
  warning: 'attention-solid',
  negative: 'close-solid',
  success: 'check-solid',
};

const SIZE_ICON = 24;

const getIcon = (alertType: StatusType): IconType => icons[alertType];

export const IonAlert = ({
  message,
  type = 'success',
  closable = false,
  hideBackground = false,
  onClose,
}: AlertProps) => {
  if (!isValidLabel(message)) {
    return <ErrorBoundary message='Message cannot be empty' />;
  }

  return (
    <Alert
      data-testid='ion-alert'
      $type={type}
      $hideBackground={hideBackground}
      $closable={closable}
    >
      <Wrapper>
        <IonIcon type={getIcon(type)} size={SIZE_ICON}></IonIcon>
        <span>{message}</span>
      </Wrapper>
      {closable && (
        <IonButton
          circular
          variant='ghost'
          icon='close'
          size='sm'
          onClick={onClose}
        />
      )}
    </Alert>
  );
};
