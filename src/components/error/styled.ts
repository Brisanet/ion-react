import stitches from '../../stitches.config';

const { styled } = stitches;

export const ErrorBoundaryStyled = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 16px 8px 12px',
  gap: 8,

  width: 'max-content',
  height: 24,

  backgroundColor: '$warning1',

  borderWidth: '1px 1px 1px 8px',
  borderStyle: 'solid',
  borderColor: '$warning7',
  borderRadius: '8px',

  fontSize: 14,
  color: '$neutral8',

  svg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    backgroundColor: '$warning7',
    fill: '$warning1',

    borderRadius: 8,
  },

  div: {
    display: 'flex',
    gap: 4,
  },

  label: {
    fontWeight: 'bold',
  },
});
