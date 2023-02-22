import { defaultSizes, Size } from '.';

const expected: { [x: number]: Size } = {
  14: { fontSize: '14px', lineHeight: '20px' },
  16: { fontSize: '16px', lineHeight: '24px' },
  20: { fontSize: '20px', lineHeight: '28px' },
  24: { fontSize: '24px', lineHeight: '32px' },
  32: { fontSize: '32px', lineHeight: '40px' },
  40: { fontSize: '40px', lineHeight: '48px' },
};
describe('Default sizes', () => {
  it.each(Object.keys(expected))(
    'should return the correct size for input %s',
    (size) => {
      expect(defaultSizes(Number(size))).toEqual(expected[Number(size)]);
    }
  );
});
