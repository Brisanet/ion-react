import stitches from '../../../stitches.config';
const { styled } = stitches;

export const Body = styled('p', {
  margin: 0,
  padding: 0,
  variants: {
    color: {
      primary: { color: '$neutral7' },
      secondary: { color: '$neutral6' },
      'dark-primary': { color: '$neutral3' },
      'dark-secondary': { color: '$neutral4' },
    },
    weight: {
      normal: { fontWeight: '400' },
      medium: { fontWeight: '600' },
      bold: { fontWeight: '700' },
    },
    style: { normal: { fontStyle: 'normal' }, italic: { fontStyle: 'italic' } },
    size: {
      small: { fontSize: '14px', lineHeight: '20px' },
      normal: { fontSize: '16px', lineHeight: '24px' },
    },
  },
});
