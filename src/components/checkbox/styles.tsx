import stitches from '../../stitches.config';

const { styled } = stitches;

const setBackgroundChecked = (fillColor: string) => {
  const encodedColor = encodeURIComponent(fillColor);
  return {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='${encodedColor}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='4' fill='none'/%3E%3Cpath d='M12.8839 6.28075C13.3721 5.79258 13.3721 5.00113 12.8839 4.51298C12.3957 4.02483 11.6043 4.02484 11.1161 4.513L6.7939 8.83535L4.88385 6.9253C4.3957 6.43714 3.60424 6.43714 3.11609 6.9253C2.62793 7.41345 2.62793 8.20491 3.11609 8.69307L5.91003 11.487C6.14445 11.7214 6.4624 11.8531 6.79392 11.8531C7.12545 11.8531 7.44339 11.7214 7.67781 11.487L12.8839 6.28075Z' fill='%23${encodedColor}'/%3E%3C/svg%3E%0A")`,
    backgroundSize: 'cover',
  };
};

export const CheckboxStyles = styled('div', {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',

  input: {
    appearance: 'none',
    width: '16px',
    height: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0px',

    '&:enabled': {
      border: '1px solid $neutral5',
      borderRadius: '4px',
      background: '$neutral1',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 0 2px 2px #b5d2fc',
        borderColor: '$primary3',
        ...setBackgroundChecked('#b5d2fc'),
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '$primary2',
        borderColor: '$primary5',
        ...setBackgroundChecked('#ebf3fe'),
      },
      '&:checked': {
        border: 'none',
        backgroundColor: '$primaryColor',
        ...setBackgroundChecked('#ebf3fe'),
        '&:hover': {
          backgroundColor: '$primary5',
        },
        '&:active': {
          backgroundColor: '$primary7',
        },
      },
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: '1.5px',
        outlineColor: 'primary5',
        outlineOffset: '2px',
      },
    },

    '&:disabled': {
      backgroundColor: '$neutral2',
      border: '1px solid $neutral4',
      borderRadius: '4px',
      cursor: 'not-allowed',
      '&:checked': {
        backgroundColor: '$neutral2',
        border: 'none',
        ...setBackgroundChecked('#ced2db'),
      },
    },
  },

  label: {
    color: '$neutral7',
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: '$neutral5',
      },
    },
  },
});
