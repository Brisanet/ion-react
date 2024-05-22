import { convertSizeValue } from './convertSizeValue';

describe('convertSizeValue', () => {
  it('should return a pixel value string when a number is informed', () => {
    const convertedValue = convertSizeValue(8);
    expect(convertedValue).toBe('8px');
  });
  it('should return the value itself when a string is informed', () => {
    const convertedValue = convertSizeValue('100%');
    expect(convertedValue).toBe('100%');
  });
});
