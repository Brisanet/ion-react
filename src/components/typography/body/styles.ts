import { css, styled } from 'styled-components';
import {
  IonBodyInterface,
  IonTypographyColorScheme,
  IonTypographyStyle,
  IonTypographyWeight,
} from '../typography.types';
import { defaultColor } from '../utils-typography';

type BodyStyleProps = {
  $color: IonTypographyColorScheme;
  $size: IonBodyInterface['size'];
  $style: IonTypographyStyle;
  $weight: IonTypographyWeight;
};

export const weights = {
  normal: 400,
  medium: 600,
  bold: 700,
};

export const sizes = {
  small: 14,
  normal: 16,
};

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
};

export const Body = styled.p<BodyStyleProps>`
  ${({ $color, $size, $style, $weight }) => css`
    margin: 0;
    padding: 0;
    color: ${defaultColor('body')[$color].color};
    ${$size && sizes[$size]};
    font-weight: ${weights[$weight]};
    font-style: ${fontStyle[$style]};
  `};
`;
