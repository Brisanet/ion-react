import stitches from '../../stitches.config';
import { spacing } from '../utils/spacing';

const { styled } = stitches;

export const TabStyles = styled('button', {
  fontStyle: 'normal',
  fontWeight: '600',
  color: '$neutral7',
  background: '$neutral1',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: spacing(1),

  '&:hover': {
    color: '$primary5',
    background: '$primary1',
    borderColor: '$primary3',
  },
  '&:disabled': {
    color: '$neutral5',
    background: '$neutral3',
    borderColor: '$neutral5',
    cursor: 'not-allowed',
  },
  '&:focus': {
    color: '$primaryColor',
    background: '$neutral1',
    borderColor: '$primaryColor',
    fontStyle: 'normal',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },

  variants: {
    size: {
      sm: {
        padding: '8px 16px',
        fontSize: '12px',
        lineHeight: '16px',
        gap: spacing(1),
      },
      md: {
        padding: '10px 24px',
        fontSize: '14px',
        lineHeight: '20px',
        gap: spacing(1.5),
      },
      lg: {
        padding: '12px 32px',
        fontSize: '16px',
        lineHeight: '24px',
        gap: spacing(2),
      },
    },
    direction: {
      bottom: {
        borderBottom: '2px solid $neutral3',
        borderRadius: '6px 6px 0px 0px',
      },
      top: {
        borderTop: '2px solid $neutral3',
        borderRadius: '0px 0px 6px 6px',
      },
      right: {
        borderRight: '2px solid $neutral3',
      },
      left: {
        borderLeft: '2px solid $neutral3',
      },
    },
    selected: {
      true: {
        color: '$primaryColor',
      },
    },
  },

  compoundVariants: [
    {
      selected: true,
      css: {
        background: '$neutral1',
        borderColor: '$primaryColor',
        '&:hover': {
          color: '$primary5',
          background: '$primary1',
          borderColor: '$primary3',
          '&:active': {
            color: '$primary7',
            background: '$primary2',
            borderColor: '$primary5',
          },
          '&:disabled': {
            color: '$neutral5',
            background: '$neutral3',
            borderColor: '$neutral5',
            cursor: 'not-allowed',
          },
        },
      },
    },
  ],
});
