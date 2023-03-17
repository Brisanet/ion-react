import React from 'react';
import { IonHeadingInterface } from '../typhography.types';
import * as S from './styles';

const IonHeading: React.FC<IonHeadingInterface> = ({
  label,
  type,
  size = 'normal',
  colorScheme = 'primary',
  weight = 'medium',
}: IonHeadingInterface) => {
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

export default IonHeading;
