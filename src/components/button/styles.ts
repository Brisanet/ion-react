import stitches from '../../stitches.config';

const { styled } = stitches;

const disabledButton = {
  backgroundColor: '$neutral2',
  border: '1px solid $neutral5',
  color: '$neutral5',
  cursor: 'not-allowed',
};

// Função que gera cores de Background, Border e cor de fonte a fim de reduzir repetições de codigo
function generateColorStyle(
  bgColor: string,
  borderColor: string,
  fontColor: string
) {
  return {
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    color: fontColor,
  };
}

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
        '&:active': { backgroundColor: '$primary7' },
        '&:disabled': disabledButton,
      },

      secondary: {
        ...generateColorStyle('$neutral1', '$neutral4', '$primaryColor'),
        '&:hover': generateColorStyle(
          '$secondaryColor',
          '$primary4',
          '$primary5'
        ),
        '&:active': generateColorStyle('$primary2', '$primary5', '$primary7'),
        '&:disabled': disabledButton,
      },
    },
  },
});
