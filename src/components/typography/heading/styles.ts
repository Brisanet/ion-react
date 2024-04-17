import { css, DefaultTheme, RuleSet, styled } from 'styled-components';
import {
  IonHeadingWeight,
  IonTypographyColorScheme,
  IonTypographySize,
  IonTypographyWeight,
} from '../typography.types';
import { defaultColor } from '../utils-typography';

type HeadingStyleProps = {
  $size: IonTypographySize;
  $color: IonTypographyColorScheme;
  $weight: IonHeadingWeight<IonTypographyWeight>;
};

const defaultHeading = (
  colorScheme: IonTypographyColorScheme,
  weight: HeadingStyleProps['$weight']
) => css`
  margin: 0;
  padding: 0;
  color: ${defaultColor('heading')[colorScheme].color};
  font-weight: ${{
    medium: 400,
    bold: 600,
  }[weight]};
`;

const defaultSizes: (
  theme: DefaultTheme,
  headingLevel: 1 | 2 | 3 | 4,
  size: IonTypographySize
) => RuleSet<object> = ({ font }, headingLevel, size) =>
  ({
    1: {
      small: css`
        ${font.size[24]}
      `,
      medium: css`
        ${font.size[32]}
      `,
      normal: css`
        ${font.size[40]}
      `,
    },
    2: {
      small: css`
        ${font.size[20]}
      `,
      medium: css`
        ${font.size[24]}
      `,
      normal: css`
        ${font.size[32]}
      `,
    },
    3: {
      small: css`
        ${font.size[16]}
      `,
      medium: css`
        ${font.size[20]}
      `,
      normal: css`
        ${font.size[24]}
      `,
    },
    4: {
      small: css`
        ${font.size[16]}
      `,
      medium: css`
        ${font.size[20]}
      `,
      normal: css`
        ${font.size[24]}
      `,
    },
  }[headingLevel][size]);

export const H1 = styled.h1<HeadingStyleProps>`
  ${({ theme, $size, $color, $weight }) => css`
    ${defaultHeading($color, $weight)}
    ${defaultSizes(theme, 1, $size)}
  `}
`;

export const H2 = styled.h2<HeadingStyleProps>`
  ${({ theme, $size, $color, $weight }) => css`
    ${defaultHeading($color, $weight)}
    ${defaultSizes(theme, 2, $size)}
  `}
`;

export const H3 = styled.h3<HeadingStyleProps>`
  ${({ theme, $size, $color, $weight }) => css`
    ${defaultHeading($color, $weight)}
    ${defaultSizes(theme, 3, $size)}
  `}
`;

export const H4 = styled.h4<HeadingStyleProps>`
  ${({ theme, $size, $color, $weight }) => css`
    ${defaultHeading($color, $weight)}
    ${defaultSizes(theme, 4, $size)}
  `}
`;
