import { css, DefaultTheme, RuleSet, styled } from 'styled-components';
import { ChipSizes } from './chip';

type ChipStyleProps = {
  $size: ChipSizes;
  $selected: boolean;
};

const sizes: (theme: DefaultTheme, size: ChipSizes) => RuleSet<object> = (
  { font },
  size
) => {
  return {
    sm: css`
      height: 24px;
      padding: 4px 8px;
      ${font.size[12]}
    `,
    md: css`
      height: 32px;
      padding: 6px 12px;
      ${font.size[14]}
    `,
  }[size];
};

const selectedColors: (theme: DefaultTheme) => RuleSet<object> = ({
  colors,
}) => css`
  background-color: ${colors.primary[1]};
  border: 1.5px solid ${colors.main.primary};
  color: ${colors.main.primary};

  svg {
    fill: ${colors.main.primary};
  }

  &:hover {
    background-color: ${colors.primary[2]};
    border-color: ${colors.primary[5]};
    color: ${colors.primary[5]};

    svg {
      fill: ${colors.primary[5]};
    }
  }

  &:focus-visible {
    background-color: ${colors.primary[1]};
    border-color: ${colors.primary[4]};
    color: ${colors.primary[5]};

    svg {
      fill: ${colors.primary[5]};
    }
  }

  &:active {
    background-color: ${colors.primary[3]};
    border-color: ${colors.primary[7]};
    color: ${colors.primary[7]};

    svg {
      fill: ${colors.primary[7]};
    }
  }

  &:disabled {
    background-color: ${colors.neutral[3]};
    border-color: ${colors.neutral[5]};
    color: ${colors.neutral[5]};

    svg {
      fill: ${colors.neutral[5]};
    }
  }
`;

export const Chip = styled.button<ChipStyleProps>`
  ${({ theme, $size, $selected }) => css`
    background-color: ${theme.colors.neutral[1]};
    border: 1px solid ${theme.colors.neutral[4]};
    border-radius: 100px;
    color: ${theme.colors.main.primary};
    cursor: pointer;
    font-weight: 600;
    ${theme.utils.flex.center(8)}
    ${theme.utils.focus}
    ${sizes(theme, $size)}
    
    svg {
      fill: ${theme.colors.main.primary};
    }

    &:hover,
    &:focus-visible {
      background-color: ${theme.colors.primary[1]};
      border-color: ${theme.colors.primary[3]};
      color: ${theme.colors.primary[5]};

      svg {
        fill: ${theme.colors.primary[5]};
      }
    }

    &:active {
      background-color: ${theme.colors.primary[2]};
      border-color: ${theme.colors.primary[5]};
      color: ${theme.colors.primary[7]};

      svg {
        fill: ${theme.colors.primary[7]};
      }
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.neutral[3]};
      border-color: ${theme.colors.neutral[5]};
      color: ${theme.colors.neutral[5]};

      svg {
        fill: ${theme.colors.neutral[5]};
      }
    }

    ${$selected && selectedColors(theme)}
  `}
`;
