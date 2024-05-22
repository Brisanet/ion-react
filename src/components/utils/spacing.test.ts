import { spacing } from './spacing';

describe('spacing', () => {
  it('should return the value with pixels in a scale of 8', () => {
    const value = 2;
    expect(spacing(value)).toBe('16px');
  });
});
