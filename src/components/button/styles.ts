import stitches from '../../stitches.config';

const { styled } = stitches;

// Componente Button
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

        '&:hover': { background: '$primary5' },
        '&:active': { background: '$primary7' },
        '&:disabled': {
          background: '$neutral2',
          color: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        background: '$neutral1',
        color: '$primaryColor',
        border: '1px solid $neutral4',

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
          border: '1px solid $primary4',
        },
        '&:active': {
          background: '$primary2',
          color: '$primary5',
          border: '1px solid $primary7',
        },
        '&:disabled': {
          background: '$neutral2 ',
          color: '$neutral5 ',
          border: '1px solid $neutral5 ',
          cursor: 'not-allowed',
        },
      },
      ghost: {
        background: 'transparent',
        color: '$primaryColor',

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
        },
        '&:active': {
          background: '$primary2',
          color: '$primary7',
        },
        '&:disabled': {
          background: 'transparent',
          color: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      dashed: {
        background: 'transparent',
        color: '$primary7',
        border: '1px dashed $neutral4',

        '&:hover': {
          background: '$primary1',
          color: '$primary5',
          border: '1px dashed $primary4',
        },
        '&:active': {
          background: '$primary2',
          color: '$primary7',
          border: '1px dashed $primary5',
        },
        '&:disabled': {
          background: '$neutral3',
          color: '$neutral5',
          border: '1px dashed $neutral5',
          cursor: 'not-allowed',
        },
      },
    },

    danger: {
      primary: {
        background: '$negative6',
        color: '$negative1',
        '&:hover': {
          background: '$negative5',
          color: '$neutral1',
        },
        '&:active': {
          background: '$negative7',
        },
        '&:disabled': {
          background: '$neutral2',
          color: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$negativeColor',
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
          border: '1px solid $negative3',
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
          border: '1px solid $negative7',
        },
        '&:disabled': {
          background: '$neutral2 ',
          color: '$neutral5 ',
          border: '1px solid $neutral5',
          cursor: 'not-allowed',
        },
      },
      ghost: {
        color: '$negative6',
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
        },
        '&:disabled': {
          background: 'transparent',
          color: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      dashed: {
        border: '1px dashed $neutral4',
        color: '$negative6',
        '&:hover': {
          background: '$negative1',
          color: '$negative5',
          border: '1px dashed $negative3',
        },
        '&:active': {
          background: '$negative2',
          color: '$negative7',
          border: '1px dashed $negative6',
        },
        '&:disabled': {
          background: '$neutral3',
          color: '$neutral5',
          border: '1px dashed $neutral5',
          cursor: 'not-allowed',
        },
      },
      none: {},
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
  },
});
