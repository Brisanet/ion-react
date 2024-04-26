import { css, RuleSet, styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { ButtonProps, ButtonSizes, ButtonVariants } from './button';

type ButtonStylesProps = {
  $variant?: ButtonProps['variant'];
  $danger?: ButtonProps['danger'];
  $size?: ButtonProps['size'];
  $hasIcon?: boolean;
  $hasLabel?: boolean;
  $circular?: boolean;
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

const sizes: (
  theme: DefaultTheme,
  hasLabel?: boolean
) => Record<ButtonSizes, RuleSet<object>> = ({ font }, hasLabel) => {
  return {
    sm: css`
      height: 24px;
      min-width: 24px;
      padding: ${hasLabel ? '4px 12px' : '0'};
      ${font.size[12]}
    `,
    md: css`
      height: 32px;
      min-width: 32px;
      padding: ${hasLabel ? '6px 16px' : '0'};
      ${font.size[14]}
    `,
    lg: css`
      height: 40px;
      min-width: 40px;
      padding: ${hasLabel ? '8px 20px' : '0'};
      ${font.size[16]}
    `,
    xl: css`
      height: 48px;
      min-width: 48px;
      padding: ${hasLabel ? '12px 24px' : '0'};
      ${font.size[16]}
    `,
  };
};

const borderRadius = (
  size: ButtonProps['size'],
  circular?: boolean,
  hasLabel?: boolean
) => {
  if (circular && !hasLabel) return '50%';
  return size && ['lg', 'xl'].includes(size) ? '10px' : '6px';
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
        border: `1px dashed ${colors[type][3]}`,
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
    border: ${colorDef.default.border || 'none'};

    svg {
      fill: ${colorDef.default.color};
    }

    &:hover,
    &:focus-visible {
      background-color: ${colorDef.hover.background};
      ${colorDef.hover.color && `color: ${colorDef.hover.color}`};
      border: ${colorDef.hover.border || 'none'};

      ${colorDef.hover.color && `svg { fill: ${colorDef.hover.color} }`}
    }

    &:active {
      background-color: ${colorDef.active.background};
      ${colorDef.active.color && `color: ${colorDef.active.color}`};
      border: ${colorDef.active.border || 'none'};

      ${colorDef.active.color && `svg { fill: ${colorDef.active.color} }`}
    }

    &:disabled {
      background-color: ${colorDef.disabled.background};
      color: ${colorDef.disabled.color};
      border: ${colorDef.disabled.border || 'none'};
      cursor: not-allowed;

      svg {
        fill: ${colorDef.disabled.color};
      }
    }
  `;
};

export const Button = styled.button<ButtonStylesProps>`
  ${({
    theme,
    $variant,
    $danger,
    $size,
    $hasIcon,
    $iconOnRight,
    $hasLabel,
    $circular,
  }) =>
    css`
      appearance: none;
      font-family: ${theme.font.family};
      font-weight: 600;
      border-radius: ${borderRadius($size, $circular, $hasLabel)};
      cursor: pointer;

      ${theme.utils.flex.center($hasIcon ? 8 : 0)};
      flex-direction: ${$iconOnRight ? 'row-reverse' : 'row'};

      ${!!$size && sizes(theme, $hasLabel)[$size]}
      ${!!$variant && variants(theme, $variant, $danger)}
      ${theme.utils.focus}
    `}
`;
