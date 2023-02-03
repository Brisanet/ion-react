import stitches from '../../stitches.config';

const { styled } = stitches;

export const StitchesButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '32px',
  height: '32px',
  padding: '6px 16px',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  gap: '8px',

  variants: {
    type: {
      primary: {
        background: '$primaryColor',
        color: '$neutral1',

        '&:hover': {
          backgroundColor: '$primary5',
        },
      },
    },
  },
});
