import React from 'react';

import IonIcon from '../icons/icons';
import { ErrorBoundaryStyled } from './styled';

export interface ErrorBoundaryProps {
  msg: string;
}
const sizeIcon = 16;
const iconType = 'info';

const ErrorBoundary = ({ msg }: ErrorBoundaryProps) => {
  return (
    <ErrorBoundaryStyled data-testid="ion-error-boundary">
      <IonIcon type={iconType} size={sizeIcon}></IonIcon>
      <div>
        <label>Error:</label>
        {msg}
      </div>
    </ErrorBoundaryStyled>
  );
};

export default ErrorBoundary;
