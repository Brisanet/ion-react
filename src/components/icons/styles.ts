import styled, { RuleSet, css } from 'styled-components';
import { convertSizeValue } from '../utils/convertSizeValue';

type IconProps = {
  $size: number | string;
  $color: string;
  $isHighlighted?: boolean;
};

const size: (size: number | string) => RuleSet<object> = (size) => {
  return css`
    width: ${convertSizeValue(size)};
    height: ${convertSizeValue(size)};
  `;
};

const color: (color: string) => RuleSet<object> = (color) => {
  return css`
    background-color: ${color};
  `;
};

export const IconHighlight = styled.div<IconProps>`
  ${({ theme, $size, $color, $isHighlighted }) => css`
    ${size($size)};
    ${color($color)}
    ${$isHighlighted
      ? css`
          ${theme.utils.flex.center()};
          border-radius: 50%;
        `
      : css`
          display: inline-flex;
        `}
  `}
`;

export const Icon = styled.svg<IconProps>`
  ${({ $size, $color }) => css`
    ${size($size)};
    fill: ${$color};
  `}
`;
