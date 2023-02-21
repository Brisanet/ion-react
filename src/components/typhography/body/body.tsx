import React from 'react';
import { IonBodyInterface } from '../typhography.types';
import * as S from './styles';

export const IonBody: React.FC<IonBodyInterface> = ({
  label,
  colorScheme = 'primary',
  size = 'normal',
  style = 'italic',
  weight = 'normal',
}: IonBodyInterface) => {
  const props = { color: colorScheme, size, style, weight };
  return (
    <S.Body {...props} data-testid="ion-body">
      {label}
    </S.Body>
  );
};
