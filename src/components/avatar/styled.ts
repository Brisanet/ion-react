import { SizeType } from '@ion/core/types/size';
import styled, { RuleSet, css } from 'styled-components';

type AvatarProps = {
  $size: SizeType;
};

type initialsFontSizes = 12 | 14 | 16;

const sizes: (size: SizeType) => RuleSet<object> = (size) => {
  const sizeOptions = {
    lg: 40,
    md: 32,
    sm: 24,
    xs: 16,
  };

  return css`
    width: ${sizeOptions[size]}px;
    height: ${sizeOptions[size]}px;
  `;
};

const fontSize: (size: SizeType) => initialsFontSizes = (size) => {
  const sizeOptions = {
    lg: 16,
    md: 14,
    sm: 12,
    xs: 12,
  } as const;

  return sizeOptions[size];
};

export const AvatarContainer = styled.div<AvatarProps>`
  ${({ theme, $size }) => css`
    ${sizes($size)}
    border-radius: 50%;
    background-color: ${theme.colors.primary[2]};
    overflow: hidden;
    ${theme.utils.flex.center()}

    span {
      color: ${theme.colors.primary[7]};
      ${theme.font.size[fontSize($size)]};
      font-weight: 600;
    }
  `}
`;

export const AvatarPhoto = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
