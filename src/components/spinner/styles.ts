import { css, DefaultTheme, keyframes, styled } from 'styled-components';
import { IonSpinnerProps } from './spinner';

type SpinnerStylesProps = {
  $variant?: IonSpinnerProps['variant'];
  $size?: IonSpinnerProps['size'];
  $customColor?: IonSpinnerProps['customColor'];
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const colorsByType = (
  theme: DefaultTheme,
  type: SpinnerStylesProps['$variant'] = 'primary'
) =>
  ({
    primary: theme.colors.main.primary,
    secondary: theme.colors.main.secondary,
    danger: theme.colors.main.negative,
  }[type]);

export const Container = styled.span``;

export const Spinner = styled.span<SpinnerStylesProps>`
  ${({ theme, $variant, $size, $customColor }) => css`
    width: ${$size}px;
    height: ${$size}px;
    display: block;
    border: 2px solid transparent;
    border-left-color: ${!$customColor
      ? colorsByType(theme, $variant)
      : $customColor};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  `}
`;
