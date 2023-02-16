import React from 'react';
import * as S from './styles';

type IonBodyWeight = 'normal' | 'medium' | 'bold';
type IonBodyStyle = 'normal' | 'italic';
type IonBodySize = 'small' | 'normal';
type IonBodyColorScheme =
  | 'primary'
  | 'secondary'
  | 'dark-primary'
  | 'dark-secondary';

export interface IonBodyProps {
  label: string;
  size?: IonBodySize;
  weight?: IonBodyWeight;
  color?: IonBodyColorScheme;
  style?: IonBodyStyle;
}

export const IonBody: React.FC<IonBodyProps> = ({
  label,
  color = 'primary',
  size = 'normal',
  style = 'normal',
  weight = 'normal',
}: IonBodyProps) => {
  const props = { color, size, style, weight };
  return (
    <S.Body {...props} data-testid="ion-body">
      {label}
    </S.Body>
  );
};
