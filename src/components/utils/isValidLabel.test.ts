import isValidLabel from './isValidLabel';

describe('isValidLabel', () => {
  const invalidLabels = ['', '       '];

  it('should return true when it is a valid label', () => {
    const customLabel = 'example label';
    expect(isValidLabel(customLabel)).toBeTruthy();
  });

  it.each(invalidLabels)(
    'should return false when it is a invalid label',
    (label) => {
      expect(isValidLabel(label)).not.toBeTruthy();
    }
  );
});
