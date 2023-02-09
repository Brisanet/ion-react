import stitches from '../../stitches.config';

const { styled } = stitches;

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
        backgroundColor: '$positive1',
        color: '$positive7',

        svg: {
          fill: '$positive7',
        },
      },
      info: {
        backgroundColor: '$info1',
        color: '$info7',

        svg: {
          fill: '$info7',
        },
      },
      warning: {
        backgroundColor: '$warning1',
        color: '$warning7',

        svg: {
          fill: '$warning7',
        },
      },
      negative: {
        backgroundColor: '$negative1',
        color: '$negative7',

        svg: {
          fill: '$negative7',
        },
      },
      neutral: {
        backgroundColor: '$neutral2',
        color: '$neutral7',

        svg: {
          fill: '$neutral7',
        },
      },
    },
    outline: {
      true: {
        border: '1px solid',
      },
    },
  },
});
