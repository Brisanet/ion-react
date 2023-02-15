import stitches from '../../stitches.config';
import { getFillBgFontBorderColors } from '../utils';

const { styled } = stitches;

export const ChipStyle = styled('button', {
  border: '1px solid $neutral4',
  borderRadius: '100px',
  cursor: 'pointer',
  outline: 'none',
  backgroundColor: '$neutral1',
  color: '$primaryColor',
  fontWeight: '600',
  alignItems: 'center',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    svg: {
      fill: '$primaryColor',
    },
  },

  '&:hover': {
    ...getFillBgFontBorderColors({
      svgFillColor: '$primary5',
      backgroundColor: '$secondaryColor',
      fontColor: '$primary5',
      borderColor: '$primary3',
    }),
  },

  '&:active': {
    outline: 'none',
    ...getFillBgFontBorderColors({
      svgFillColor: '$primary7',
      backgroundColor: '$primary2',
      fontColor: '$primary7',
      borderColor: '$primary5',
    }),
  },

  '&:focus-visible': {
    outline: '2px solid $primary6',
    outlineOffset: '2px',
    ...getFillBgFontBorderColors({
      svgFillColor: '$primary5',
      backgroundColor: '$secondaryColor',
      fontColor: '$primary5',
      borderColor: '$primary3',
    }),
  },

  '&:disabled': {
    outline: 'none',
    cursor: 'not-allowed',
    ...getFillBgFontBorderColors({
      svgFillColor: '$neutral5',
      backgroundColor: '$neutral3',
      fontColor: '$neutral5',
      borderColor: '$neutral5',
    }),
  },

  defaultVariants: {
    size: 'sm',
  },
  variants: {
    selected: {
      true: {
        border: '1.5px solid $primary5',
        borderRadius: '100px',
        fontWeight: '600',
        cursor: 'pointer',
        backgroundColor: '$primary2',

        '&:hover': {
          border: '1.5px solid $primary5',
          backgroundColor: '$primary2',
          color: '$primary5',

          svg: {
            fill: '$primary5',
          },
        },
      },
    },
    size: {
      sm: {
        padding: '4px 8px',
        lineHeight: '16px',
        fontSize: '12px',
      },
      md: {
        padding: '6px 12px',
        lineHeight: '20px',
        fontSize: '14px',
      },
    },
  },
});
