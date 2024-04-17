import theme from '@ion/styles/theme';
import { Color, defaultColor, TypographyComponent } from '.';

const expected: { [x: string]: Color } = {
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

describe('Default colors', () => {
  it.each(Object.keys(expected))(
    'should return the correct color when %s',
    (component) => {
      expect(defaultColor(component as TypographyComponent)).toEqual(
        expected[component]
      );
    }
  );
});
