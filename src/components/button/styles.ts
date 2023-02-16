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
        ...getBgFontBorderColors({
          background: '$primaryColor',
          color: '$neutral1',
        }),

        '&:hover': {
          background: '$primary5',
        },
        '&:active': { background: '$primary7' },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral2',
            color: '$neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        ...getBgFontBorderColors({
          background: '$neutral1',
          color: '$primaryColor',
          border: '1px solid $neutral4',
        }),

        '&:hover': getBgFontBorderColors({
          background: '$primary1',
          color: '$primary5',
          border: '1px solid $primary4',
        }),
        '&:active': getBgFontBorderColors({
          background: '$primary2',
          color: '$primary5',
          border: '1px solid $primary7',
        }),
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral2 ',
            color: '$neutral5 ',
            border: '1px solid $neutral5 ',
          }),
          cursor: 'not-allowed',
        },
      },
      ghost: {
        ...getBgFontBorderColors({
          background: 'transparent',
          color: '$primaryColor',
        }),

        '&:hover': {
          ...getBgFontBorderColors({
            background: '$primary1',
            color: '$primary5',
          }),
        },
        '&:active': {
          ...getBgFontBorderColors({
            background: '$primary2',
            color: '$primary7',
          }),
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: 'transparent',
            color: '$neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      dashed: {
        ...getBgFontBorderColors({
          background: 'transparent',
          color: '$primary7',
          border: '1px dashed $neutral4',
        }),

        '&:hover': {
          ...getBgFontBorderColors({
            background: '$primary1',
            color: '$primary5',
            border: '1px dashed $primary4',
          }),
        },
        '&:active': {
          ...getBgFontBorderColors({
            background: '$primary2',
            color: '$primary7',
            border: '1px dashed $primary5',
          }),
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral3',
            color: '$neutral5',
            border: '1px dashed $neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
    },

    danger: {
      primary: {
        ...getBgFontBorderColors({
          background: '$negative6',
          color: '$negative1',
        }),
        '&:hover': {
          ...getBgFontBorderColors({
            background: '$negative5',
            color: '$neutral1',
          }),
        },
        '&:active': {
          background: '$negative7',
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral2',
            color: '$neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$negativeColor',
        '&:hover': {
          ...getBgFontBorderColors({
            background: '$negative1',
            color: '$negative5',
            border: '1px solid $negative3',
          }),
        },
        '&:active': {
          ...getBgFontBorderColors({
            background: '$negative2',
            color: '$negative7',
            border: '1px solid $negative7',
          }),
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral2 ',
            color: '$neutral5 ',
            border: '1px solid $neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      ghost: {
        color: '$negative6',
        '&:hover': {
          ...getBgFontBorderColors({
            background: '$negative1',
            color: '$negative5',
          }),
        },
        '&:active': {
          ...getBgFontBorderColors({
            background: '$negative2',
            color: '$negative7',
          }),
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: 'transparent',
            color: '$neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      dashed: {
        border: '1px dashed $neutral4',
        color: '$negative6',
        '&:hover': {
          ...getBgFontBorderColors({
            background: '$negative1',
            color: '$negative5',
            border: '1px dashed $negative3',
          }),
        },
        '&:active': {
          ...getBgFontBorderColors({
            background: '$negative2',
            color: '$negative7',
            border: '1px dashed $negative6',
          }),
        },
        '&:disabled': {
          ...getBgFontBorderColors({
            background: '$neutral3',
            color: '$neutral5',
            border: '1px dashed $neutral5',
          }),
          cursor: 'not-allowed',
        },
      },
      none: {},
    },

    size: {
      sm: {
        ...getButtonSize({
          buttonSize: '24px',
          padding: '4px 12px',
          fontSize: '12px',
        }),
      },
      md: {
        ...getButtonSize({
          buttonSize: '32px',
          padding: '6px 16px',
          fontSize: '14px',
        }),
      },
      lg: {
        ...getButtonSize({
          buttonSize: '40px',
          padding: '8px 20px',
          fontSize: '16px',
        }),
      },
      xl: {
        ...getButtonSize({
          buttonSize: '48px',
          padding: '12px 24px',
          fontSize: '16px',
        }),
      },
    },
  },
});
