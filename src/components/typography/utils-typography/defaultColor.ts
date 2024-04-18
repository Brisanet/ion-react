import theme from '../../../styles/theme';

export type Color = {
  primary: { color: string };
  secondary: { color: string };
  'dark-primary': { color: string };
  'dark-secondary': { color: string };
};
export type TypographyComponent = 'heading' | 'body';

export function defaultColor(component: TypographyComponent): Color {
  const colors: { [x: string]: Color } = {
    heading: {
      primary: { color: theme.colors.neutral[8] },
      secondary: { color: theme.colors.neutral[7] },
      'dark-primary': { color: theme.colors.neutral[1] },
      'dark-secondary': { color: theme.colors.neutral[3] },
    },
    body: {
      primary: { color: theme.colors.neutral[7] },
      secondary: { color: theme.colors.neutral[6] },
      'dark-primary': { color: theme.colors.neutral[3] },
      'dark-secondary': { color: theme.colors.neutral[4] },
    },
  };

  return colors[component];
}
