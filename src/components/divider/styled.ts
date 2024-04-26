import styled, { RuleSet, css } from 'styled-components';
import { DividerDirection, DividerType } from './divider';

type DividerProps = {
  $direction: DividerDirection;
  $type: DividerType;
};

const type: (type: DividerType) => RuleSet<object> = (type) => {
  return {
    solid: css`
      border-style: solid;
    `,
    dashed: css`
      border-style: dashed;
    `,
  }[type];
};

const directions: (direction: DividerDirection) => RuleSet<object> = (
  direction
) => {
  return {
    horizontal: css`
      border-top: 1px;
      width: 100%;
    `,
    vertical: css`
      border-left: 1px;
      height: 100%;
      width: 0;
    `,
  }[direction];
};

export const DividerContainer = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)}

    & span {
      color: ${theme.colors.neutral[7]};
      ${theme.font.size[14]}
    }
  `}
`;

export const Divider = styled.hr<DividerProps>`
  ${({ theme, $direction, $type }) => css`
    border-width: 0px;
    ${directions($direction)}
    ${type($type)}
    border-color: ${theme.colors.neutral[4]};
  `}
`;
