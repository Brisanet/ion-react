import styled, { css, DefaultTheme, RuleSet } from 'styled-components';
import { BadgeStatus, BadgeType } from './badge';

type BadgeStylesProps = {
  $type: BadgeType;
};

type DotStylesProps = {
  $size: number;
  $status: BadgeStatus;
  $customColor?: string;
  $hasIcon?: boolean;
};

type ColorByVariant = {
  background: string;
  color?: string;
};

export const typeColors: (
  theme: DefaultTheme,
  type: BadgeType
) => ColorByVariant = ({ colors }, type) =>
  ({
    primary: {
      background: colors.main.primary,
    },
    secondary: {
      background: colors.primary[1],
      color: colors.main.primary,
    },
    neutral: {
      background: colors.neutral[4],
      color: colors.neutral[8],
    },
    danger: {
      background: colors.main.negative,
    },
  }[type]);

const type: (theme: DefaultTheme, type: BadgeType) => RuleSet<object> = (
  theme,
  type
) => {
  const { background, color } = typeColors(theme, type);

  return css`
    background-color: ${background};
    color: ${color || theme.colors.neutral[1]};
  `;
};

export const Badge = styled.span<BadgeStylesProps>`
  ${({ theme, $type }) => css`
    ${theme.font.size[12]};
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.4rem;
    border-radius: 50rem;
    user-select: none;
    ${type(theme, $type)};
  `}
`;

export const DotContainer = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)}

    span {
      ${theme.font.size[14]};
      font-weight: 400;
      color: ${theme.colors.neutral[7]};
    }
  `}
`;

export const Dot = styled.div<DotStylesProps>`
  ${({ theme, $size, $status, $customColor, $hasIcon }) => css`
    width: ${!$hasIcon ? 8 : $size}px;
    height: ${!$hasIcon ? 8 : $size}px;
    border-radius: 50%;

    ${$hasIcon &&
    css`
      ${theme.utils.flex.center()}
    `}

    background-color: ${$customColor || theme.colors[$status][6]};
  `}
`;
