import stitches from '../../stitches.config';

const { styled } = stitches;

const setColors = (bgColor: string, color: string) => ({
  backgroundColor: bgColor,
  color: color,
  svg: {
    fill: color,
  },
});

export const TagStyle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
  gap: '6px',

  width: 'max-content',
  height: 'max-content',
  minHeight: '20px',

  backgroundColor: '$whitetransparence90',
  color: '$neutral7',
  borderRadius: '50px',

  span: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
  },

  variants: {
    status: {
      success: {
        ...setColors('$positive1', '$positive7'),
      },
      info: {
        ...setColors('$info1', '$info7'),
      },
      warning: {
        ...setColors('$warning1', '$warning7'),
      },
      negative: {
        ...setColors('$negative1', '$negative7'),
      },
      neutral: {
        ...setColors('$neutral2', '$neutral7'),
      },
    },
    outline: {
      true: {
        border: '1px solid',
      },
    },
  },
});
