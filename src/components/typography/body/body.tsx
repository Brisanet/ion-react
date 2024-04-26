import { IonBodyInterface } from '../typography.types';
import * as S from './styles';

export const IonBody = ({
  label,
  colorScheme = 'primary',
  size = 'normal',
  style = 'normal',
  weight = 'normal',
}: IonBodyInterface) => {
  const props = {
    $color: colorScheme,
    $size: size,
    $style: style,
    $weight: weight,
  };
  return (
    <S.Body {...props} data-testid='ion-body'>
      {label}
    </S.Body>
  );
};
