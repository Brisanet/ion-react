import { css, styled } from 'styled-components';

export const Message = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)}
    ${theme.utils.shadow.doubleShadow}
    padding: 8px 16px;
    background-color: ${theme.colors.neutral[1]};
    width: fit-content;
    border-radius: 8px;

    span {
      ${theme.font.size[14]}
      font-weight: 400;
      color: ${theme.colors.neutral[7]};
    }
  `}
`;
