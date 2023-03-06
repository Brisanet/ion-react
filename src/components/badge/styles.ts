import stitches from '../../stitches.config';
import { spacing } from '../utils/spacing';

const { styled } = stitches;

export const BadgeStyles = styled('span', {
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '16px',
  padding: `${spacing(0)} ${spacing(0.5)}`,
  borderRadius: '50px',
  cursor: 'default',

  variants: {
    type: {
      primary: {
        background: '$primaryColor',
        color: '$neutral1',
      },
      secondary: {
        background: '$secondaryColor',
        color: '$primaryColor',
      },
      neutral: {
        background: '$neutral4',
        color: '$neutral8',
      },
      negative: {
        background: '$negativeColor',
        color: '$positive1',
      },
    },
  },
});
