import { css, styled } from 'styled-components';

interface DropdownItemStylesProps {
  $selected?: boolean;
  $disabled?: boolean;
}

export const Label = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)}
  `}
`;

export const Container = styled.div<DropdownItemStylesProps>`
  ${({ theme, $selected, $disabled }) => css`
    ${theme.utils.flex.spaceBetween(8)}
    ${theme.font.size[14]}
    font-weight: 400;
    height: 32px;
    border-radius: 8px;
    padding: 6px 12px;
    background: ${theme.colors.neutral[1]};
    color: ${theme.colors.neutral[7]};
    cursor: pointer;

    svg {
      fill: ${theme.colors.neutral[7]};
    }

    ${!$disabled &&
    css`
      &:hover {
        background: ${theme.colors.primary[1]};
      }

      &:active {
        background: ${theme.colors.primary[2]};
        color: ${theme.colors.primary[5]};

        svg {
          fill: ${theme.colors.primary[5]};
        }
      }

      ${$selected &&
      css`
        background: ${theme.colors.primary[1]};
        color: ${theme.colors.primary[5]};

        svg {
          fill: ${theme.colors.primary[5]};
        }

        &:hover {
          color: ${theme.colors.primary[4]};

          svg {
            fill: ${theme.colors.primary[4]};
          }
        }

        &:active {
          background: ${theme.colors.primary[2]};
          color: ${theme.colors.primary[7]};

          svg {
            fill: ${theme.colors.primary[7]};
          }
        }
      `}
    `}

    ${$disabled &&
    css`
      cursor: not-allowed;
      background: ${theme.colors.neutral[1]};
      color: ${theme.colors.neutral[3]};

      svg {
        fill: ${theme.colors.neutral[3]};
      }

      ${$selected &&
      css`
        background: ${theme.colors.neutral[2]};
        color: ${theme.colors.neutral[5]};

        svg {
          fill: ${theme.colors.neutral[5]};
        }
      `}
    `}
  `}
`;
