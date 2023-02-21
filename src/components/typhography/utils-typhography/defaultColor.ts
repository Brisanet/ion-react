export type Color = {
  primary: { color: string };
  secondary: { color: string };
  'dark-primary': { color: string };
  'dark-secondary': { color: string };
};
export type TyphographyComponent = 'heading' | 'body';

export function defaultColor(component: TyphographyComponent): Color {
  const colors: { [x: string]: Color } = {
    heading: {
      primary: { color: '$neutral8' },
      secondary: { color: '$neutral7' },
      'dark-primary': { color: '$neutral1' },
      'dark-secondary': { color: '$neutral3' },
    },
    body: {
      primary: { color: '$neutral7' },
      secondary: { color: '$neutral6' },
      'dark-primary': { color: '$neutral3' },
      'dark-secondary': { color: '$neutral4' },
    },
  };

  return colors[component];
}
