import { defaultColor, Color } from '.';

const expected: { [x: string]: Color } = {
  neutral1: { color: '$neutral1' },
  neutral2: { color: '$neutral2' },
  neutral3: { color: '$neutral3' },
  neutral4: { color: '$neutral4' },
  neutral5: { color: '$neutral5' },
  neutral6: { color: '$neutral6' },
  neutral7: { color: '$neutral7' },
  neutral8: { color: '$neutral8' },
};

describe('Default colors', () => {
  it.each(Object.keys(expected))(
    'should return the correct color when %s',
    (color) => {
      expect(defaultColor(color)).toEqual(expected[color]);
    }
  );
});
