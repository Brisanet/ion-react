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
  const defaultProps = {
    'data-testid': testid,
    color: colorScheme,
    size,
    weight,
  };
  const headings = {
    h1: <S.H1 {...defaultProps}>{label}</S.H1>,
    h2: <S.H2 {...defaultProps}>{label}</S.H2>,
    h3: <S.H3 {...defaultProps}>{label}</S.H3>,
    h4: <S.H4 {...defaultProps}>{label}</S.H4>,
  };
  return headings[type];
};
