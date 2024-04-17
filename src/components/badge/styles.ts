import styled, { DefaultTheme, RuleSet, css } from 'styled-components';
import { BadgeType } from './badge';

type BadgeStylesProps = {
  $type: BadgeType;
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
