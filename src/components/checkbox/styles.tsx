import { css, styled } from 'styled-components';

const checkedIconBackground = (color: string) => css`
  ${() => {
    const encodedColor = encodeURIComponent(color);
    return css`
      background-image: ${`url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='${encodedColor}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='4' fill='none'/%3E%3Cpath d='M12.8839 6.28075C13.3721 5.79258 13.3721 5.00113 12.8839 4.51298C12.3957 4.02483 11.6043 4.02484 11.1161 4.513L6.7939 8.83535L4.88385 6.9253C4.3957 6.43714 3.60424 6.43714 3.11609 6.9253C2.62793 7.41345 2.62793 8.20491 3.11609 8.69307L5.91003 11.487C6.14445 11.7214 6.4624 11.8531 6.79392 11.8531C7.12545 11.8531 7.44339 11.7214 7.67781 11.487L12.8839 6.28075Z' fill='%23${encodedColor}'/%3E%3C/svg%3E%0A")`};
      background-size: cover;
    `;
  }};
`;

export const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  ${({ theme }) => css`
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.4rem;
    border-radius: 0.4rem;
    border: 1px solid ${theme.colors.neutral[5]};
    background: ${theme.colors.neutral[1]};
    cursor: pointer;
    ${theme.utils.focus}

    &:enabled {
      &:hover, &:focus-visible {
        box-shadow: 0 0 0.2rem 0.2rem ${theme.colors.primary[2]};
        border-color: ${theme.colors.primary[3]};
        ${checkedIconBackground(theme.colors.primary[2])};
      }

      &:active {
        box-shadow: none;
        background-color: ${theme.colors.primary[2]};
        border-color: ${theme.colors.primary[5]};
        ${checkedIconBackground(theme.colors.primary[1])};
      }

      &:checked {
        border: none;
        background-color: ${theme.colors.primary[6]};
        ${checkedIconBackground(theme.colors.primary[1])};

        &:hover {
          background-color: ${theme.colors.primary[5]};
        }

        &:active {
          background-color: ${theme.colors.primary[7]};
        }
      }
    }

    &:disabled {
      background-color: ${theme.colors.neutral[3]};
      border: 1px solid ${theme.colors.neutral[4]};
      cursor: not-allowed;

      &:checked {
        background-color: ${theme.colors.neutral[2]};
        border: none;
        ${checkedIconBackground(theme.colors.neutral[4])};
      }
    },
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.size[14]};
    color: ${theme.colors.neutral[7]};

    ${Checkbox}:disabled + & {
      color: ${theme.colors.neutral[5]};
    }
  `};
`;
