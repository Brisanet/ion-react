import stitches from '../../stitches.config';

const { styled } = stitches;

export const StitcheButton = styled('button', {
  width: '50%',
  color: 'White',
  fontSize: '$rg',
  fontWeight: 'normal',
  backgroundColor: '$primaryColor',
  borderRadius: '6px',
  padding: '10px 15px',
  border: 'none',
  '&:hover': {
    backgroundColor: '$primary7',
  },
  variants: {
    size: {
      sm: {
        width: '75px',
      },
    },
  },
});
