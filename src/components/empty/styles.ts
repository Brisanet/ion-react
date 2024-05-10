import { css, styled } from 'styled-components';

export const Empty = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.center(4)}
    ${theme.font.size[12]}
    font-weight: 600;
    color: ${theme.colors.neutral[6]};

    svg {
      fill: ${theme.colors.neutral[6]};
    }
  `}
`;
