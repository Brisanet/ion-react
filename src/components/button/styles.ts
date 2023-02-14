import stitches from '../../stitches.config';
import { getBgFontBorderColors } from '../utils/getBgFontBorderColors';
import { getButtonSize } from '../utils/getButtonParameters';

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
        ...getBgFontBorderColors('$primaryColor', '$neutral1', ''),

        '&:hover': {
          background: '$primary5',
        },
        '&:active': { background: '$primary7' },
        '&:disabled': {
          ...getBgFontBorderColors('$neutral2', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        ...getBgFontBorderColors('$neutral1', '$primaryColor', '$neutral4'),

        '&:hover': getBgFontBorderColors('$primary1', '$primary5', '$primary4'),
        '&:active': getBgFontBorderColors(
          '$primary2',
          '$primary5',
          '$primary7'
        ),
        '&:disabled': {
          ...getBgFontBorderColors('$neutral2 ', '$neutral5 ', '$neutral5 '),
          cursor: 'not-allowed',
        },
      },
      ghost: {
        ...getBgFontBorderColors('transparent', '$primaryColor', ''),

        '&:hover': {
          ...getBgFontBorderColors('$primary1', '$primary5', ''),
        },
        '&:active': {
          ...getBgFontBorderColors('$primary2', '$primary7', ''),
        },
        '&:disabled': {
          ...getBgFontBorderColors('transparent', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      dashed: {
        ...getBgFontBorderColors('transparent', '$primaryColor', ''),
        border: '1px dashed $neutral4',

        '&:hover': {
          ...getBgFontBorderColors('$primary1', '$primary5', ''),
          borderColor: '$primary4',
        },
        '&:active': {
          ...getBgFontBorderColors('$primary2', '$primary7', ''),
          borderColor: '$primary5',
        },
        '&:disabled': {
          ...getBgFontBorderColors('$neutral3', '$neutral5', ''),
          borderColor: '$neutral5',
          cursor: 'not-allowed',
        },
      },
    },

    danger: {
      primary: {
        ...getBgFontBorderColors('$negative6', '$negative1', ''),
        '&:hover': {
          ...getBgFontBorderColors('$negative5', '$neutral1', ''),
        },
        '&:active': {
          background: '$negative7',
        },
        '&:disabled': {
          ...getBgFontBorderColors('$neutral2', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$negativeColor',
        '&:hover': {
          ...getBgFontBorderColors('$negative1', '$negative5', '$negative3'),
        },
        '&:active': {
          ...getBgFontBorderColors('$negative2', '$negative7', ''),
        },
        '&:disabled': {
          ...getBgFontBorderColors('$neutral2 ', '$neutral5 ', '$neutral5 '),
          cursor: 'not-allowed',
        },
      },
      ghost: {
        color: '$negative6',
        '&:hover': {
          ...getBgFontBorderColors('$negative1', '$negative5', ''),
        },
        '&:active': {
          ...getBgFontBorderColors('$negative2', '$negative7', ''),
        },
        '&:disabled': {
          ...getBgFontBorderColors('transparent', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      dashed: {
        border: '1px dashed $neutral4',
        color: '$negative6',
        '&:hover': {
          ...getBgFontBorderColors('$negative1', '$negative5', ''),
          borderColor: '$negative3',
        },
        '&:active': {
          ...getBgFontBorderColors('$negative2', '$negative7', ''),
          borderColor: '$negative6',
        },
        '&:disabled': {
          ...getBgFontBorderColors('$neutral3', '$neutral5', ''),
          borderColor: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      none: {},
    },

    size: {
      sm: {
        ...getButtonSize('24px', '4px 12px', '12px'),
      },
      md: {
        ...getButtonSize('32px', '6px 16px', '14px'),
      },
      lg: {
        ...getButtonSize('40px', '8px 20px', '16px'),
      },
      xl: {
        ...getButtonSize('48px', '12px 24px', '16px'),
      },
    },
  },
});
