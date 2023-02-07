import stitches from '../../stitches.config';

const { styled } = stitches;

// Tipo para objeto de estilos  da função geradora de estilos
type ColorStyle = {
  background: string;
  color: string;
  border?: string;
};

/* 
  Função que gera cores de Background, Border e cor de
  fonte a fim de reduzir repetições de codigo

  Seguir o padrão de parâmetros: 
  1- Cor do background;
  2- Cor da fonte do botão;
  3- (Opicional) Cor da borda;
*/
function generateColorStyle(
  bgColor: string,
  fontColor: string,
  borderColor: string
) {
  let styles: ColorStyle = {
    background: bgColor,
    color: fontColor,
  };

  borderColor && (styles.border = `1px solid ${borderColor}`);

  return styles;
}

// Componente Button
export const ButtonStyles = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 16px',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  minWidth: '32px',
  height: '32px',
  gap: '8px',

  variants: {
    type: {
      primary: {
        ...generateColorStyle('$primaryColor', '$neutral1', ''),

        '&:hover': {
          background: '$primary5',
        },
        '&:active': { backgroundColor: '$primary7' },
        '&:disabled': {
          ...generateColorStyle(
            '$neutral2 !important',
            '$neutral5 !important',
            ''
          ),
          cursor: 'not-allowed',
        },
        '&.danger': {
          ...generateColorStyle('$negative6', '$negative1', ''),
          '&:hover': {
            ...generateColorStyle('$negative5', '$neutral1', ''),
          },
          '&:active': {
            background: '$negative7',
          },
        },
      },
      secondary: {
        ...generateColorStyle('$neutral1', '$primaryColor', '$neutral4'),

        '&:hover': generateColorStyle('$primary1', '$primary5', '$primary4'),
        '&:active': generateColorStyle('$primary2', '$primary5', '$primary7'),
        '&:disabled': {
          ...generateColorStyle(
            '$neutral2 !important',
            '$neutral5 !important',
            '$neutral5 !important'
          ),
          cursor: 'not-allowed',
        },
        '&.danger': {
          color: '$negativeColor',
          '&:hover': {
            ...generateColorStyle('$negative1', '$negative5', '$negative3'),
          },
          '&:active': {
            ...generateColorStyle('$negative2', '$negative7', ''),
          },
        },
      },
      ghost: {
        ...generateColorStyle('transparent', '$primaryColor', ''),

        '&:hover': {
          ...generateColorStyle('$primary1', '$primary5', ''),
        },
        '&:active': {
          ...generateColorStyle('$primary2', '$primary7', ''),
        },
        '&:disabled': {
          ...generateColorStyle(
            'transparent !important',
            '$neutral5 !important',
            ''
          ),
          cursor: 'not-allowed',
        },
        '&.danger': {
          color: '$negative6',
          '&:hover': {
            ...generateColorStyle('$negative1', '$negative5', ''),
          },
          '&:active': {
            ...generateColorStyle('$negative2', '$negative7', ''),
          },
        },
      },
      dashed: {
        ...generateColorStyle('transparent', '$primaryColor', ''),
        border: '1px dashed $neutral4',

        '&:hover': {
          ...generateColorStyle('$primary1', '$primary5', ''),
          borderColor: '$primary4',
        },
        '&:active': {
          ...generateColorStyle('$primary2', '$primary7', ''),
          borderColor: '$primary5',
        },
        '&:disabled': {
          ...generateColorStyle(
            '$neutral3 !important',
            '$neutral5 !important',
            ''
          ),
          borderColor: '$neutral5 !important',
          cursor: 'not-allowed',
        },
        '&.danger': {
          border: '1px dashed $neutral4',
          color: '$negative6',
          '&:hover': {
            ...generateColorStyle('$negative1', '$negative5', ''),
            borderColor: '$negative3',
          },
          '&:active': {
            ...generateColorStyle('$negative2', '$negative7', ''),
            borderColor: '$negative6',
          },
        },
      },
    },
  },
});
