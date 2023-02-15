import stitches from '../../stitches.config';
const { styled } = stitches;

export const BreadcrumbStyles = styled('nav', {
  padding: '5px 7px',
  textDecoration: 'none',
  fontFamily: 'sans-serif',
  fontSize: '15px',

  '& > ol': {
    display: 'inline-flex',
    margin: '0',
    padding: '10px',

    '& li': {
      display: 'block',

      '&::after': {
        content: '/',
        marginRight: '0px',
        color: '#b9cbdf',
      },
      '&:last-child::after': {
        content: '',
      },
      '& a': {
        padding: '10px',
        textDecoration: 'none',
        color: '#54718f',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        '&:hover': {
          color: 'blue',
        },
      },
    },
  },
});
