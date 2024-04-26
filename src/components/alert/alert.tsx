import { useState } from 'react';
import { StatusType } from '../../core/types/status';
import ErrorBoundary from '../error/error-boundary';

import { IonIcon } from '../icons/icons';
import isValidLabel from '../utils/isValidLabel';
import { AlertStyled } from './styled';
import { IconType } from '../icons/svgs/icons';

export interface AlertProps {
  message: string;
  type?: StatusType;
  closable?: boolean;
  hideBackground?: boolean;
}

const icons: Record<StatusType, IconType> = {
  info: 'info-solid',
  warning: 'attention-solid',
  negative: 'close-solid',
  success: 'check-solid',
};

const sizeIcon = 24;

const getIcon = (alertType: StatusType) => icons[alertType];

export const IonAlert = ({
  message,
  type = 'success',
  closable = false,
  hideBackground = false,
}: AlertProps) => {
  const [showAlert, setShowAlert] = useState(true);
  const icon = getIcon(type);

  if (!isValidLabel(message)) {
    return <ErrorBoundary message='Message cannot be empty' />;
  }

  if (!showAlert) {
    return <></>;
  }

  return (
    <AlertStyled
      data-testid='ion-alert'
      type={type}
      hideBackground={hideBackground}
    >
      <IonIcon type={icon} size={sizeIcon}></IonIcon>
      <span>{message}</span>
      {closable && (
        <div onClick={() => setShowAlert(false)}>
          <IonIcon type='close' size={sizeIcon}></IonIcon>
        </div>
      )}
    </AlertStyled>
  );
};
