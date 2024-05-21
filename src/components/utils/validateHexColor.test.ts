import { validateHexColor } from './validateHexColor';

const validHexColors = ['#000000', '#000'];
const invalidHexColors = ['#AABBCC000', '#XXBBCC'];
describe('validateHexColor', () => {
  it.each(invalidHexColors)(
    'should return false if an invalid hexadecimal color is provided',
    (value) => {
      expect(validateHexColor(value)).toBe(false);
    }
  );
  it.each(validHexColors)(
    'should return false if an invalid hexadecimal color is provided',
    (value) => {
      expect(validateHexColor(value)).toBe(true);
    }
  );
});
