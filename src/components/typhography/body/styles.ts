import stitches from '../../../stitches.config';
import { defaultSizes, defaultColor } from '../utils-typhography';
const { styled } = stitches;

export const Body = styled('p', {
  margin: 0,
  padding: 0,
  variants: {
    color: {
      primary: defaultColor('neutral7'),
      secondary: defaultColor('neutral6'),
      'dark-primary': defaultColor('neutral3'),
      'dark-secondary': defaultColor('neutral4'),
    },
    weight: {
      normal: { fontWeight: '400' },
      medium: { fontWeight: '600' },
      bold: { fontWeight: '700' },
    },
    style: { normal: { fontStyle: 'normal' }, italic: { fontStyle: 'italic' } },
    size: {
      small: defaultSizes(14),
      normal: defaultSizes(16),
    },
  },
});
