import React from 'react';

import IonIcon from '../icons/icons';
import { ErrorBoundaryStyled } from './styled';

export interface ErrorBoundaryProps {
  msg: string;
}
const ErrorBoundary = ({ msg }: ErrorBoundaryProps) => {
  return (
    <ErrorBoundaryStyled data-testid="ion-error-boundary">
      <IonIcon type="info" size={16}></IonIcon>
      <div>
        <label>Error:</label>
        {msg}
      </div>
    </ErrorBoundaryStyled>
  );
};

export default ErrorBoundary;
