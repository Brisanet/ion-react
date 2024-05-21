import { css, DefaultTheme, RuleSet, styled } from 'styled-components';
import { StepStatusType } from './steps';

type StepStylesProps = {
  $status: StepStatusType;
  $clickable: boolean;
  $disabled: boolean;
};

export const StepsContainerStyle = styled.div`
  display: flex;
`;

export const StepDrawStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const LineStyle = styled.div<{ $bolded: boolean }>`
  ${({ theme, $bolded }) => css`
    width: 64.5px;
    height: 1px;
    background-color: ${$bolded
      ? theme.colors.primary[6]
      : theme.colors.neutral[4]};
  `}
`;

export const CircleStyle = styled.div`
  ${({ theme }) => css`
    box-sizing: content-box;
    margin: 8px;
    padding: 4px;
    min-width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid;
    ${theme.utils.flex.center()}
    ${theme.font.size[14]}
    font-style: normal;
    font-weight: 600;
  `}
`;

export const DetailsStyle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.neutral[6]};
    font-style: normal;
    font-weight: 400;
    word-break: break-all;
    padding: 3px 8px;
    max-width: 183px;
    box-sizing: border-box;

    .label,
    .description {
      font-family: 'Inter', sans-serif;
    }

    .label {
      ${theme.font.size[14]}
    }

    .description {
      ${theme.font.size[12]}
    }
  `}
`;

export const stylesByStatus = (
  theme: DefaultTheme,
  status: StepStatusType
): RuleSet<object> => {
  return {
    default: css`
      ${CircleStyle} {
        border-color: ${theme.colors.neutral[6]};
        background-color: ${theme.colors.neutral[1]};
        color: ${theme.colors.neutral[8]};
      }
    `,
    selected: css`
      ${CircleStyle} {
        border-color: ${theme.colors.primary[6]};
        background-color: ${theme.colors.primary[6]};
        color: ${theme.colors.neutral[1]};
      }

      ${DetailsStyle} {
        .label {
          color: ${theme.colors.neutral[7]};
        }
      }
    `,
    checked: css`
      ${CircleStyle} {
        border-color: ${theme.colors.primary[6]};
        background-color: ${theme.colors.primary[1]};
        color: ${theme.colors.primary[6]};

        svg {
          margin-top: 5px;
          fill: ${theme.colors.primary[6]};
        }
      }
    `,
    error: css`
      ${CircleStyle} {
        border-color: ${theme.colors.negative[6]};
        background-color: ${theme.colors.negative[6]};
        color: ${theme.colors.neutral[1]};
      }
    `,
  }[status];
};

export const clickableStyles = (theme: DefaultTheme) => css`
  cursor: pointer;

  &:hover,
  &:active {
    ${DetailsStyle} {
      .label,
      .description {
        color: ${theme.colors.primary[5]};
      }
    }
  }
`;

export const clickableStylesByStatus = (
  theme: DefaultTheme,
  status: StepStatusType
): RuleSet<object> => {
  return {
    default: css`
      &:hover {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[4]};
          background-color: ${theme.colors.neutral[1]};
          color: ${theme.colors.primary[7]};
        }
      }

      &:active {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[6]};
          background-color: ${theme.colors.primary[1]};
          color: ${theme.colors.primary[7]};
        }
      }
    `,
    selected: css`
      &:hover {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[5]};
          background-color: ${theme.colors.primary[5]};
          color: ${theme.colors.neutral[1]};
        }
      }

      &:active {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[7]};
          background-color: ${theme.colors.primary[7]};
          color: ${theme.colors.neutral[1]};
        }
      }
    `,
    checked: css`
      &:hover {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[6]};
          background-color: ${theme.colors.primary[2]};
          color: ${theme.colors.primary[6]};

          svg {
            margin-top: 5px;
            fill: ${theme.colors.primary[6]};
          }
        }
      }

      &:active {
        ${CircleStyle} {
          border-color: ${theme.colors.primary[6]};
          background-color: ${theme.colors.primary[2]};
          color: ${theme.colors.primary[7]};

          svg {
            margin-top: 5px;
            fill: ${theme.colors.primary[7]};
          }
        }
      }
    `,
    error: css`
      &:hover {
        ${CircleStyle} {
          border-color: ${theme.colors.negative[5]};
          background-color: ${theme.colors.negative[5]};
          color: ${theme.colors.neutral[1]};
        }
      }

      &:active {
        ${CircleStyle} {
          border-color: ${theme.colors.negative[7]};
          background-color: ${theme.colors.negative[7]};
          color: ${theme.colors.neutral[1]};
        }
      }
    `,
  }[status];
};

export const disabledStyles = (theme: DefaultTheme) => css`
  cursor: not-allowed;

  &:hover,
  &:active {
    ${DetailsStyle} {
      .label,
      .description {
        color: ${theme.colors.neutral[5]};
      }
    }
  }

  ${LineStyle} {
    background-color: ${theme.colors.neutral[4]};
  }

  ${CircleStyle} {
    border-color: ${theme.colors.neutral[4]};
    background-color: ${theme.colors.neutral[4]};
    color: ${theme.colors.neutral[5]};

    svg {
      margin-top: 5px;
      fill: ${theme.colors.neutral[5]};
    }
  }

  ${DetailsStyle} {
    .label,
    .description {
      color: ${theme.colors.neutral[5]};
    }
  }
`;

export const StepStyle = styled.div<StepStylesProps>`
  ${({ theme, $status, $clickable, $disabled }) => css`
    display: flex;
    flex-direction: column;

    &:first-child {
      ${DetailsStyle} {
        .label,
        .description {
          text-align: left;
          max-width: 118.5px;
        }
      }
    }

    &:last-child {
      ${DetailsStyle} {
        .label,
        .description {
          text-align: right;
          max-width: 118.5px;
        }
      }
    }

    ${stylesByStatus(theme, $status)}

    ${$clickable && clickableStyles(theme)}
    ${$clickable && !$disabled && clickableStylesByStatus(theme, $status)}

    ${$disabled && disabledStyles(theme)}
  `}
`;
