import React from 'react';
import * as S from './styles';

type IonHeadingWeight = 'medium' | 'bold';
type IonHeadingType = 'h1' | 'h2' | 'h3' | 'h4';
type IonHeadingSize = 'small' | 'medium' | 'normal';
type IonHeadingColorScheme =
  | 'primary'
  | 'secondary'
  | 'dark-primary'
  | 'dark-secondary';

export interface IonHeadingProps {
  label: string;
  type: IonHeadingType;
  size?: IonHeadingSize;
  weight?: IonHeadingWeight;
  colorScheme?: IonHeadingColorScheme;
}

export const IonHeading: React.FC<IonHeadingProps> = ({
  label,
  type,
  size = 'normal',
  colorScheme = 'primary',
  weight = 'medium',
}: IonHeadingProps) => {
  const testid = `ion-heading-${type}`;
  const headings = {
    h1: (
      <S.H1
        data-testid={testid}
        color={colorScheme}
        size={size}
        weight={weight}
      >
        {label}
      </S.H1>
    ),
    h2: (
      <S.H2
        data-testid={testid}
        color={colorScheme}
        size={size}
        weight={weight}
      >
        {label}
      </S.H2>
    ),
    h3: (
      <S.H3
        data-testid={testid}
        color={colorScheme}
        size={size}
        weight={weight}
      >
        {label}
      </S.H3>
    ),
    h4: (
      <S.H4
        data-testid={testid}
        color={colorScheme}
        size={size}
        weight={weight}
      >
        {label}
      </S.H4>
    ),
  };
  return headings[type];
};
