import stitches from '../../stitches.config';

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
    backgroundColor: '$secondaryColor',
    border: '1px solid $primary3',
    color: '$primary5',

    svg: {
      fill: '$primary5',
    },
  },

  '&:active': {
    border: '1px solid $primary5',
    outline: 'none',
    backgroundColor: '$primary2',
    color: '$primary7',

    svg: {
      fill: '$primary7',
    },
  },

  '&:focus-visible': {
    border: '1px solid $primary3',
    outline: '2px solid $primary6',
    outlineOffset: '2px',
    backgroundColor: '$secondaryColor',
    color: '$primary5',

    svg: {
      fill: '$primary5',
    },
  },

  '&:disabled': {
    border: '1px solid $neutral5',
    outline: 'none',
    cursor: 'not-allowed',
    backgroundColor: '$neutral3',
    color: '$neutral5',

    svg: {
      fill: '$neutral5',
    },
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
