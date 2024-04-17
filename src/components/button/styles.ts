import styled, { RuleSet, css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { ButtonProps, ButtonSizes, ButtonVariants } from './button';

type ButtonStylesProps = {
  $variant?: ButtonProps['variant'];
  $danger?: ButtonProps['danger'];
  $size?: ButtonProps['size'];
  $hasIcon?: boolean;
  $iconOnRight?: ButtonProps['iconOnRight'];
};

type ColorByState = {
  background: string;
  color?: string;
  border?: string;
};

type ColorDefinitions = {
  default: ColorByState;
  hover: ColorByState;
  active: ColorByState;
  disabled: ColorByState;
};

const sizes: (theme: DefaultTheme) => Record<ButtonSizes, RuleSet<object>> = ({
  font,
}) => {
  return {
    sm: css`
      padding: 4px 12px;
      ${font.size[12]}
    `,
    md: css`
      padding: 6px 16px;
      ${font.size[14]}
    `,
    lg: css`
      padding: 8px 20px;
      ${font.size[16]}
    `,
    xl: css`
      padding: 12px 24px;
      ${font.size[16]}
    `,
  };
};

export const variantsColors: (
  theme: DefaultTheme,
  variant: ButtonVariants,
  danger?: boolean
) => ColorDefinitions = ({ colors }, variant, danger) => {
  const type = danger ? 'negative' : 'primary';

  return {
    primary: {
      default: {
        background: colors.main[type],
        color: colors.neutral[1],
      },
      hover: {
        background: colors[type][5],
      },
      active: {
        background: colors[type][7],
      },
      disabled: {
        background: colors.neutral[3],
        color: colors.neutral[5],
      },
    },
    secondary: {
      default: {
        background: colors.neutral[1],
        color: colors.main[type],
        border: `1px solid ${colors.neutral[4]}`,
      },
      hover: {
        background: colors[type][1],
        border: `1px solid ${colors[type][3]}`,
        color: colors[type][5],
      },
      active: {
        background: colors[type][2],
        color: colors[type][7],
        border: `1px solid ${colors[type][5]}`,
      },
      disabled: {
        background: colors.neutral[3],
        color: colors.neutral[5],
        border: `1px solid ${colors.neutral[5]}`,
      },
    },
    ghost: {
      default: {
        background: 'transparent',
        color: colors.main[type],
      },
      hover: {
        background: colors[type][1],
        color: colors[type][5],
      },
      active: {
        background: colors[type][2],
        color: colors[type][7],
      },
      disabled: {
        background: 'transparent',
        color: colors.neutral[5],
      },
    },
    dashed: {
      default: {
        background: colors.neutral[1],
        color: colors.main[type],
        border: `1px dashed ${colors.neutral[4]}`,
      },
      hover: {
        background: colors[type][1],
        hoverBorder: `1px dashed ${colors[type][3]}`,
        color: colors[type][5],
      },
      active: {
        background: colors[type][2],
        color: colors[type][7],
        border: `1px dashed ${colors[type][5]}`,
      },
      disabled: {
        background: colors.neutral[3],
        color: colors.neutral[5],
        border: `1px dashed ${colors.neutral[5]}`,
      },
    },
  }[variant];
};

const variants: (
  theme: DefaultTheme,
  variant: ButtonVariants,
  danger?: boolean
) => RuleSet<object> = (theme, variant, danger) => {
  const colorDef = variantsColors(theme, variant, danger);

  return css`
    background-color: ${colorDef.default.background};
    color: ${colorDef.default.color};
    border: ${colorDef.default.border ||
    `1px solid ${colorDef.default.background}`};

    svg {
      fill: ${colorDef.default.color};
    }

    &:hover,
    &:focus-visible {
      background-color: ${colorDef.hover.background};
      ${colorDef.hover.color && `color: ${colorDef.hover.color}`};
      border: ${colorDef.hover.border ||
      `1px solid ${colorDef.hover.background}`};

      ${colorDef.hover.color && `svg { fill: ${colorDef.hover.color} }`}
    }

    &:active {
      background-color: ${colorDef.active.background};
      ${colorDef.active.color && `color: ${colorDef.active.color}`};
      border: ${colorDef.active.border ||
      `1px solid ${colorDef.active.background}`};

      ${colorDef.active.color && `svg { fill: ${colorDef.active.color} }`}
    }

    &:disabled {
      background-color: ${colorDef.disabled.background};
      color: ${colorDef.disabled.color};
      border: ${colorDef.disabled.border ||
      `1px solid ${colorDef.disabled.background}`};
      cursor: not-allowed;

      svg {
        fill: ${colorDef.disabled.color};
      }
    }
  `;
};

export const Button = styled.button<ButtonStylesProps>`
  ${({ theme, $variant, $danger, $size, $hasIcon, $iconOnRight }) =>
    css`
      appearance: none;
      font-family: ${theme.font.family};
      font-weight: 600;
      border-radius: ${$size && ['lg', 'xl'].includes($size) ? '10px' : '6px'};
      cursor: pointer;

      ${theme.utils.flex.center($hasIcon ? 8 : 0)};
      flex-direction: ${$iconOnRight ? 'row-reverse' : 'row'};

      ${!!$size && sizes(theme)[$size]}
      ${!!$variant && variants(theme, $variant, $danger)}
      ${theme.utils.focus}
    `}
`;
