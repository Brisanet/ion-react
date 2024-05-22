import { StatusType } from '@ion/core/types/status';
import { css, styled } from 'styled-components';

type AlertStyledProps = {
  $type: StatusType;
  $hideBackground: boolean;
  $closable: boolean;
};

const getColorsType = (type: StatusType) => {
  return {
    success: 'positive',
    info: 'info',
    warning: 'warning',
    negative: 'negative',
  }[type] as 'positive' | 'info' | 'warning' | 'negative';
};

export const Alert = styled.div<AlertStyledProps>`
  ${({ theme, $type, $hideBackground, $closable }) => css`
    ${theme.utils.flex.spaceBetween(8)};
    ${theme.font.size[14]}
    font-weight: 400;
    color: ${theme.colors.neutral[8]};
    border-radius: 8px;

    ${!$hideBackground &&
    css`
      height: 4rem;
      padding: 8px ${$closable ? '16px' : '16px 8px 12px'};
      border: 1px solid ${theme.colors[getColorsType($type)][6]};
      background-color: ${!$hideBackground &&
      theme.colors[getColorsType($type)][1]};
      ${!$closable &&
      `border-left: 8px solid ${theme.colors[getColorsType($type)][6]}`};
    `}

    ${Wrapper} svg {
      fill: ${theme.colors[getColorsType($type)][6]};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.center(8)}
  `}
`;
