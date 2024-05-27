import { css, styled } from 'styled-components';

export const RadioGroup = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Container = styled.div<{ $disabled?: boolean }>`
  ${({ theme, $disabled }) => css`
    ${theme.utils.flex.start(8)}

    label {
      ${theme.font.size[14]}
      font-weight: 400;
      color: ${theme.colors.neutral[7]};
      cursor: pointer;

      ${$disabled &&
      css`
        color: ${theme.colors.neutral[5]};
        cursor: not-allowed;
      `}
    }

    input[type='radio'] {
      appearance: none;
      width: 16px;
      height: 16px;
      margin: 4px;
      border-radius: 50%;
      border: 1px solid ${theme.colors.neutral[5]};
      background-color: ${theme.colors.neutral[1]};
      ${theme.utils.focus}
      cursor: pointer;

      &::before {
        content: '';
        display: none;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${theme.colors.primary[2]};
        position: relative;
        top: 50%;
        left: 50%;
        transform: scale(1) translate(-50%, -50%);
      }

      &:hover,
      &:focus-visible {
        border: 1px solid ${theme.colors.primary[3]};
        background-color: ${theme.colors.primary[1]};
        box-shadow: 0 0 0 4px ${theme.colors.primary[1]};
      }

      &:hover::before {
        display: block;
      }

      &:active {
        border: 1px solid ${theme.colors.primary[5]};
        background-color: ${theme.colors.primary[2]};
        box-shadow: none;

        &::before {
          display: block;
          background-color: ${theme.colors.primary[1]};
        }
      }

      &:disabled {
        border: 1px solid ${theme.colors.neutral[4]};
        background-color: ${theme.colors.neutral[3]};
        cursor: not-allowed;
        box-shadow: none;

        &::before {
          display: none;
        }
      }

      &:checked {
        border: 4px solid ${theme.colors.main.primary};
        background-color: ${theme.colors.primary[1]};

        &:hover,
        &:focus-visible {
          border: 4px solid ${theme.colors.primary[5]};
          box-shadow: 0 0 0 4px ${theme.colors.primary[1]};

          &::before {
            display: none;
          }
        }

        &:active {
          border: 5px solid ${theme.colors.primary[7]};
          box-shadow: none;
        }

        &:disabled {
          border: 4px solid ${theme.colors.neutral[2]};
          background-color: ${theme.colors.neutral[4]};
          box-shadow: none;
        }
      }
    }
  `}
`;
