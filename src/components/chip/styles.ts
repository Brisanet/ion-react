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

  '&:hover': {
    backgroundColor: '$secondaryColor',
    border: '1px solid $primary3',
    color: '$primary5',
  },

  variants: {
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
