import stitches from '../../stitches.config';
import { spacing } from '../utils/spacing';

const { styled } = stitches;

export const ButtonStyles = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  gap: '8px',

  variants: {
    type: {
      primary: {
        background: '$primaryColor',
        color: '$neutral1',
        svg: {
          fill: '$neutral1',
        },

        '&:hover': { background: '$primary5' },
        '&:active': { background: '$primary7' },
        '&:disabled': {
          background: '$neutral2',
          color: '$neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
      secondary: {
        background: '$neutral1',
        color: '$primaryColor',
        border: '1px solid $neutral4',
        svg: {
          fill: '$primaryColor',
        },

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
          border: '1px solid $primary4',
          svg: {
            fill: '$primary5',
          },
        },
        '&:active': {
          background: '$primary2',
          color: '$primary5',
          border: '1px solid $primary7',
          svg: {
            fill: '$primary5',
          },
        },
        '&:disabled': {
          background: '$neutral2 ',
          color: '$neutral5 ',
          border: '1px solid $neutral5 ',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
      ghost: {
        background: 'transparent',
        color: '$primaryColor',
        svg: {
          fill: '$primaryColor',
        },

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
          svg: {
            fill: '$primary5',
          },
        },
        '&:active': {
          background: '$primary2',
          color: '$primary7',
          svg: {
            fill: '$primary7',
          },
        },
        '&:disabled': {
          background: 'transparent',
          color: '$neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
      dashed: {
        background: 'transparent',
        color: '$primary7',
        border: '1px dashed $neutral4',
        svg: {
          fill: '$primary7',
        },

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
          border: '1px dashed $primary4',
          svg: {
            fill: '$primary5',
          },
        },
        '&:active': {
          background: '$primary2',
          color: '$primary7',
          border: '1px dashed $primary5',
          svg: {
            fill: '$primary7',
          },
        },
        '&:disabled': {
          background: '$neutral3',
          color: '$neutral5',
          border: '1px dashed $neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
    },

    danger: {
      true: {
        background: 'transparent',
      },
    },

    size: {
      sm: {
        minWidth: '24px',
        height: '24px',
        padding: '4px 12px',
        fontSize: '12px',
      },
      md: {
        minWidth: '32px',
        height: '32px',
        padding: '6px 16px',
        fontSize: '14px',
      },
      lg: {
        minWidth: '40px',
        height: '40px',
        padding: '8px 20px',
        fontSize: '16px',
      },
      xl: {
        minWidth: '48px',
        height: '48px',
        padding: '12px 24px',
        fontSize: '16px',
      },
    },

    withIcon: {
      true: {
        div: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: spacing(1),
        },
      },
    },

    iconOnRight: {
      true: {
        div: {
          flexDirection: 'row-reverse',
        },
      },
    },
  },

  compoundVariants: [
    {
      type: 'primary',
      danger: true,
      css: {
        background: '$negative6',
        color: '$negative1',
        svg: {
          fill: '$negative1',
        },

        '&:hover': {
          background: '$negative5',
          color: '$neutral1',
          svg: {
            fill: '$primary1',
          },
        },
        '&:active': {
          background: '$negative7',
        },
        '&:disabled': {
          background: '$neutral2',
          color: '$neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
    },
    {
      type: 'secondary',
      danger: true,
      css: {
        color: '$negativeColor',
        svg: {
          fill: '$negativeColor',
        },
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
          border: '1px solid $negative3',
          svg: {
            fill: '$negative5',
          },
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
          border: '1px solid $negative7',
          svg: {
            fill: '$negative7',
          },
        },
        '&:disabled': {
          background: '$neutral2 ',
          color: '$neutral5 ',
          border: '1px solid $neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
    },
    {
      type: 'ghost',
      danger: true,
      css: {
        color: '$negative6',
        svg: {
          fill: '$negative6',
        },
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
          svg: {
            fill: '$negative5',
          },
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
          svg: {
            fill: '$negative7',
          },
        },
        '&:disabled': {
          background: 'transparent',
          color: '$neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
    },
    {
      type: 'dashed',
      danger: true,
      css: {
        border: '1px dashed $neutral4',
        color: '$negative6',
        svg: {
          fill: '$negative6',
        },
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
          border: '1px dashed $negative3',
          svg: {
            fill: '$negative5',
          },
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
          border: '1px dashed $negative6',
          svg: {
            fill: '$negative7',
          },
        },
        '&:disabled': {
          background: '$neutral3',
          color: '$neutral5',
          border: '1px dashed $neutral5',
          cursor: 'not-allowed',
          svg: {
            fill: '$neutral5',
          },
        },
      },
    },
  ],
});
