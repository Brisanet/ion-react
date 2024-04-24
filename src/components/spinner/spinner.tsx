import { validateHexColor } from '../utils/validateHexColor';
import { Container, Spinner } from './styles';

type Variant = 'primary' | 'secondary' | 'danger';

export interface IonSpinnerProps {
  variant?: Variant;
  size?: number;
  customColor?: string;
}

export const IonSpinner = ({
  variant = 'primary',
  size = 32,
  customColor = '',
}: IonSpinnerProps) => {
  return (
    <Container>
      <Spinner
        data-testid='ion-spinner'
        $variant={variant}
        $size={size}
        $customColor={validateHexColor(customColor) ? customColor : undefined}
      />
    </Container>
  );
};
