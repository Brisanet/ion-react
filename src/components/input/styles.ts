import { css, styled } from 'styled-components';

export const Container = styled.div<{ disabled: boolean }>`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)};
    width: 100%;
    background: ${theme.colors.neutral[1]};
    border: 1px solid ${theme.colors.neutral[5]};
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    cursor: text;
    ${theme.utils.focus};

    &:hover {
      border-color: ${theme.colors.primary[4]};
    }

    &:focus-within {
      border-color: ${theme.colors.primary[5]};
    }

    &[disabled] {
      cursor: not-allowed;
      outline: none;
      background: ${theme.colors.neutral[2]};
      color: ${theme.colors.neutral[4]};
      border-color: ${theme.colors.neutral[4]};

      &::placeholder {
        color: ${theme.colors.neutral[4]};
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.font.size[14]}
    border: none;
    width: 100%;
    outline: none;
    color: ${theme.colors.neutral[7]};
    background: ${theme.colors.neutral[1]};

    &:disabled {
      background: ${theme.colors.neutral[2]};
      cursor: not-allowed;
      outline: none;
    }
  `}
`;
