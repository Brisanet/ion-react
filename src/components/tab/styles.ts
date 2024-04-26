import { BorderDirection } from '@ion/core/types/directions';
import { css, DefaultTheme, RuleSet, styled } from 'styled-components';
import { TabSizes } from './tab';

type TabProps = {
  $size: TabSizes;
  $direction: BorderDirection;
  $selected: boolean;
};

const sizes: (theme: DefaultTheme, size: TabSizes) => RuleSet<object> = (
  { font },
  size
) => {
  return {
    sm: css`
      padding: 8px 16px;
      ${font.size[12]}
    `,
    md: css`
      padding: 10px 24px;
      ${font.size[14]}
    `,
    lg: css`
      padding: 12px 32px;
      ${font.size[16]}
    `,
  }[size];
};

const directions: (direction: BorderDirection) => RuleSet<object> = (
  direction
) => {
  return {
    bottom: css`
      border-bottom: 2px solid;
      border-radius: 6px 6px 0px 0px;
    `,
    top: css`
      border-top: 2px solid;
      border-radius: 0px 0px 6px 6px;
    `,
    right: css`
      border-right: 2px solid;
      border-radius: 6px 0px 0px 6px;
    `,
    left: css`
      border-left: 2px solid;
      border-radius: 0px 6px 6px 0px;
    `,
  }[direction];
};

export const Tab = styled.button<TabProps>`
  ${({ theme, $size, $direction, $selected }) => css`
    font-weight: 600;
    color: ${theme.colors.neutral[7]};
    background: ${theme.colors.neutral[1]};
    cursor: pointer;
    ${theme.utils.flex.spaceBetween(8)};
    ${sizes(theme, $size)};
    ${directions($direction)};
    border-color: ${theme.colors.neutral[4]};
    ${theme.utils.focus}

    svg {
      fill: ${theme.colors.neutral[7]};
    }

    &:hover,
    &:focus-visible {
      color: ${theme.colors.primary[5]};
      background: ${theme.colors.primary[1]};
      border-color: ${theme.colors.primary[3]};

      svg {
        fill: ${theme.colors.primary[5]};
      }
    }

    &:active {
      color: ${theme.colors.primary[7]};
      background: ${theme.colors.primary[2]};
      border-color: ${theme.colors.primary[5]};

      svg {
        fill: ${theme.colors.primary[7]};
      }
    }

    &:disabled {
      color: ${theme.colors.neutral[5]};
      background: ${theme.colors.neutral[3]};
      border-color: ${theme.colors.neutral[5]};
      cursor: not-allowed;

      svg {
        fill: ${theme.colors.neutral[5]};
      }
    }

    ${$selected &&
    css`
      color: ${theme.colors.main.primary};
      border-color: ${theme.colors.main.primary};

      svg {
        fill: ${theme.colors.main.primary};
      }
    `}
  `}
`;
