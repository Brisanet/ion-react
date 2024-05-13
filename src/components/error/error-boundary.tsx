import { IonAlert } from '../alert';
import { ErrorBoundaryStyled } from './styled';

export interface ErrorBoundaryProps {
  message: string;
}

const ErrorBoundary = ({ message }: ErrorBoundaryProps) => (
  <ErrorBoundaryStyled data-testid='ion-error-boundary'>
    <IonAlert type='warning' message={message} />
  </ErrorBoundaryStyled>
);

export default ErrorBoundary;
