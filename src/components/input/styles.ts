import stitches from '../../stitches.config';
const { styled } = stitches;

export const InputContainer = styled('div', {
  display: 'flex',
  lineHeight: '0',
  width: '100%',
});

export const InputRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: '$neutral1',
  border: '1px solid $neutral5',
  borderRadius: '8px',
  padding: '8px 12px',
  width: '100%',

  variants: {
    disabled: {
      true: {
        background: '$neutral2',
        border: '1px solid $neutral4',
        cursor: 'not-allowed',
        outline: 'none',
        color: '$neutral4',

        '&:hover': {
          borderColor: '$neutral4',
        },

        '::placeholder': {
          color: '$neutral5',
        },
      },
    },
  },

  '&:focus-within': {
    borderColor: '$primary5',
    outline: '2px solid',
    outlineColor: '$primary2',
  },

  '&:hover': {
    borderColor: '$primary4',
  },
});

export const InputStyles = styled('input', {
  border: 'none',
  width: '100%',
  outline: 'none',
  color: '$neutral7',
  background: '$neutral1',
  fontSize: '14px',

  '&[disabled]': {
    background: '$neutral2',
    cursor: 'not-allowed',
    outline: 'none',
  },
});
