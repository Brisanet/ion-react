import React, { useState } from 'react';
import { StatusType } from '../../core/types/status';
import ErrorBoundary from '../error/error-boundary';

import IonIcon from '../icons/icons';
import isValidLabel from '../utils/isValidLabel';
import { AlertStyled } from './styled';

export interface AlertProps {
  message: string;
  type?: StatusType;
  closable?: boolean;
  hideBackground?: boolean;
}

type iconType =
  | 'check-solid'
  | 'exclamation-solid'
  | 'info-solid'
  | 'close-solid';

const sizeIcon = 24;

const getIcon = (alertType: StatusType): iconType => {
  if (alertType === 'info') {
    return 'info-solid';
  }

  if (alertType === 'warning') {
    return 'exclamation-solid';
  }

  if (alertType === 'negative') {
    return 'close-solid';
  }

  return 'check-solid';
};

const IonAlert = ({
  message,
  type = 'success',
  closable = false,
  hideBackground = false,
}: AlertProps) => {
  const [showAlert, setShowAlert] = useState(true);
  const icon = getIcon(type);

  if (!isValidLabel(message)) {
    return <ErrorBoundary msg="Message cannot be empty" />;
  }

  if (!showAlert) {
    return <></>;
  }

  return (
    <AlertStyled
      data-testid="ion-alert"
      type={type}
      hideBackground={hideBackground}
    >
      <IonIcon type={icon} size={sizeIcon}></IonIcon>
      <span>{message}</span>
      {closable && (
        <div onClick={() => setShowAlert(false)}>
          <IonIcon type="close" size={sizeIcon}></IonIcon>
        </div>
      )}
    </AlertStyled>
  );
};

export default IonAlert;
