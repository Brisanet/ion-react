import { SizeType } from '@ion/core/types/size';
import styled, { DefaultTheme, RuleSet, css } from 'styled-components';

type AvatarProps = {
  $size: SizeType;
};

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

const fontSize: (theme: DefaultTheme) => Record<SizeType, RuleSet<object>> = (
  theme
) => {
  return {
    lg: css`
      ${theme.font.size[16]}
    `,
    md: css`
      ${theme.font.size[14]}
    `,
    sm: css`
      ${theme.font.size[12]}
    `,
    xs: css`
      ${theme.font.size[12]}
    `,
  };
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
      ${fontSize(theme)[$size]};
      font-weight: 600;
    }
  `}
`;

export const AvatarPhoto = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
