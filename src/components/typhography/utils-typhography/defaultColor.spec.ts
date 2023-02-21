import { defaultColor, Color, TyphographyComponent } from '.';

const expected: { [x: string]: Color } = {
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

describe('Default colors', () => {
  it.each(Object.keys(expected))(
    'should return the correct color when %s',
    (component) => {
      expect(defaultColor(component as TyphographyComponent)).toEqual(
        expected[component]
      );
    }
  );
});
