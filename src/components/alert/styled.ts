import stitches from '../../stitches.config';

const { styled } = stitches;

const setColors = (bgColor: string, color: string) => ({
  backgroundColor: bgColor,
  borderColor: color,

  svg: {
    fill: color,
  },
});

export const AlertStyled = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 16px 8px 12px',
  gap: 8,

  minHeight: 24,

  backgroundColor: '$positive1',

  borderWidth: '1px 1px 1px 8px',
  borderStyle: 'solid',
  borderColor: '$positive6',
  borderRadius: 8,

  fontSize: 14,
  fontWeight: 400,
  color: '$neutral8',

  svg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    fill: '$primary6',

    borderRadius: 9,
  },

  span: {
    width: '95%',
  },

  '& svg:last-child': {
    fill: '$primary6',
  },

  variants: {
    type: {
      info: {
        ...setColors('$info1', '$info6'),
      },
      warning: {
        ...setColors('$warning1', '$warning6'),
      },
      negative: {
        ...setColors('$negative1', '$negative6'),
      },
      success: {
        ...setColors('$positive1', '$positive6'),
      },
    },
    hideBackground: {
      true: {
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',
      },
    },
  },
});
