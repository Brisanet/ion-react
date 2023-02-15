import stitches from '../../stitches.config';
import { getBgFontBorderColors } from '../utils/getBgFontBorderColors';
import { getButtonSize } from '../utils/getButtonSize';

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
        ...getBgFontBorderColors(
          '$neutral1',
          '$primaryColor',
          '1px solid $neutral4'
        ),

        '&:hover': getBgFontBorderColors(
          '$primary1',
          '$primary5',
          '1px solid $primary4'
        ),
        '&:active': getBgFontBorderColors(
          '$primary2',
          '$primary5',
          '1px solid $primary7'
        ),
        '&:disabled': {
          ...getBgFontBorderColors(
            '$neutral2 ',
            '$neutral5 ',
            '1px solid $neutral5 '
          ),
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
        ...getBgFontBorderColors(
          'transparent',
          '$primary7',
          '1px dashed $neutral4'
        ),

        '&:hover': {
          ...getBgFontBorderColors(
            '$primary1',
            '$primary5',
            '1px dashed $primary4'
          ),
        },
        '&:active': {
          ...getBgFontBorderColors(
            '$primary2',
            '$primary7',
            '1px dashed $primary5'
          ),
        },
        '&:disabled': {
          ...getBgFontBorderColors(
            '$neutral3',
            '$neutral5',
            '1px dashed $neutral5'
          ),
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
          ...getBgFontBorderColors(
            '$negative1',
            '$negative5',
            '1px solid $negative3'
          ),
        },
        '&:active': {
          ...getBgFontBorderColors(
            '$negative2',
            '$negative7',
            '1px solid $negative7'
          ),
        },
        '&:disabled': {
          ...getBgFontBorderColors(
            '$neutral2 ',
            '$neutral5 ',
            '1px solid $neutral5'
          ),
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
          ...getBgFontBorderColors(
            '$negative1',
            '$negative5',
            '1px dashed $negative3'
          ),
        },
        '&:active': {
          ...getBgFontBorderColors(
            '$negative2',
            '$negative7',
            '1px dashed $negative6'
          ),
        },
        '&:disabled': {
          ...getBgFontBorderColors(
            '$neutral3',
            '$neutral5',
            '1px dashed $neutral5'
          ),
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
