import stitches from '../../stitches.config';
import { generateColorStyle } from '../utils/generateColorStyle';

const { styled } = stitches;

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
        '&:active': { background: '$primary7' },
        '&:disabled': { 
          ...generateColorStyle('$neutral2', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        ...generateColorStyle('$neutral1', '$primaryColor', '$neutral4'),

        '&:hover': generateColorStyle('$primary1', '$primary5', '$primary4'),
        '&:active': generateColorStyle('$primary2', '$primary5', '$primary7'),
        '&:disabled': {
          ...generateColorStyle('$neutral2 ', '$neutral5 ', '$neutral5 '),
          cursor: 'not-allowed',
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
          ...generateColorStyle('transparent', '$neutral5', ''),
          cursor: 'not-allowed',
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
          ...generateColorStyle('$neutral3', '$neutral5', ''),
          borderColor: '$neutral5',
          cursor: 'not-allowed',
        },
      },
    },

    danger: {
      primary: {
        ...generateColorStyle('$negative6', '$negative1', ''),
        '&:hover': {
          ...generateColorStyle('$negative5', '$neutral1', ''),
        },
        '&:active': {
          background: '$negative7',
        },
        '&:disabled': { 
          ...generateColorStyle('$neutral2', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$negativeColor',
        '&:hover': {
          ...generateColorStyle('$negative1', '$negative5', '$negative3'),
        },
        '&:active': {
          ...generateColorStyle('$negative2', '$negative7', ''),
        },
        '&:disabled': {
          ...generateColorStyle('$neutral2 ', '$neutral5 ', '$neutral5 '),
          cursor: 'not-allowed',
        },
      },
      ghost: {
        color: '$negative6',
        '&:active': {
          ...generateColorStyle('$negative2', '$negative7', ''),
        },
        '&:hover': {
          ...generateColorStyle('$negative1', '$negative5', ''),
        },
        '&:disabled': {
          ...generateColorStyle('transparent', '$neutral5', ''),
          cursor: 'not-allowed',
        },
      },
      dashed: {
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
        '&:disabled': {
          ...generateColorStyle('$neutral3', '$neutral5', ''),
          borderColor: '$neutral5',
          cursor: 'not-allowed',
        },
      },
      none: { },
    },
  },
});
