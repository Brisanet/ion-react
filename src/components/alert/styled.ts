import stitches from '../../stitches.config';
import { getFillBgFontBorderColors } from '../utils';
import { spacing } from '../utils/spacing';

const { styled } = stitches;

export const AlertStyled = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: `${spacing(1)} ${spacing(2)} ${spacing(1)} ${spacing(1.5)}`,
  gap: spacing(1),

  minHeight: 24,

  backgroundColor: '$positive1',

  borderWidth: '1px 1px 1px 8px',
  borderStyle: 'solid',
  borderColor: '$positive6',
  borderRadius: 8,

  fontSize: 14,
  fontWeight: 400,
  color: '$neutral8',

  svg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(1),

    fill: '$primary6',

    borderRadius: 9,
  },

  span: {
    width: '95%',
  },

  '& svg:last-child': {
    fill: '$primary6',
  },

  variants: {
    type: {
      info: {
        ...getFillBgFontBorderColors({
          backgroundColor: '$info1',
          borderColor: '$info6',
          svgFillColor: '$info6',
          fontColor: '$neutral8',
        }),
      },
      warning: {
        ...getFillBgFontBorderColors({
          backgroundColor: '$warning1',
          borderColor: '$warning6',
          svgFillColor: '$warning6',
          fontColor: '$neutral8',
        }),
      },
      negative: {
        ...getFillBgFontBorderColors({
          backgroundColor: '$negative1',
          borderColor: '$negative6',
          svgFillColor: '$negative6',
          fontColor: '$neutral8',
        }),
      },
      success: {
        ...getFillBgFontBorderColors({
          backgroundColor: '$positive1',
          borderColor: '$positive6',
          svgFillColor: '$positive6',
          fontColor: '$neutral8',
        }),
      },
    },
    hideBackground: {
      true: {
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
      },
    },
  },
});
