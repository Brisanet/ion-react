import { TagStatus } from '@ion/core/types/status';
import { css, DefaultTheme, RuleSet, styled } from 'styled-components';

const TRANSPARENCY_FACTOR = '1A';

type TagStyleProps = {
  status?: TagStatus;
  color?: string;
  $outline: boolean;
};

type TagColors = {
  background: string;
  color: string;
};

export const getColorsByStatus: (
  theme: DefaultTheme,
  status: TagStatus
) => TagColors = ({ colors }, status) =>
  ({
    success: { background: colors.positive[1], color: colors.positive[7] },
    info: { background: colors.info[1], color: colors.info[7] },
    warning: { background: colors.warning[1], color: colors.warning[7] },
    negative: { background: colors.negative[1], color: colors.negative[7] },
    neutral: {
      background: colors.transparency.white[90],
      color: colors.neutral[7],
    },
  }[status]);

const getColorsByVariableColor: (color: string) => TagColors = (color) => ({
  background: color + TRANSPARENCY_FACTOR,
  color,
});

const setColors: (colors: TagColors) => RuleSet<object> = (colors) => css`
  background-color: ${colors.background};
  color: ${colors.color};
  border-color: ${colors.color};

  svg {
    fill: ${colors.color};
  }
`;

export const Tag = styled.div<TagStyleProps>`
  ${({ theme, status, $outline, color }) => css`
    ${theme.utils.flex.center(6)};
    ${theme.font.size[12]}
    ${theme.utils.focus}
    font-weight: 400;
    width: max-content;
    height: 20px;
    padding: 2px 8px;
    background-color: ${theme.colors.transparency.white[90]};
    color: ${theme.colors.neutral[7]};
    border-radius: 50px;
    ${!!$outline &&
    css`
      border: 1px solid;
    `};
    ${!!color && setColors(getColorsByVariableColor(color))};
    ${!!status && setColors(getColorsByStatus(theme, status))};
  `}
`;
