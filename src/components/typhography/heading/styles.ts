import stitches from '../../../stitches.config';
const { styled } = stitches;

type Size = { fontSize: string; lineHeight: string };

const defaultSettingHeading = {
  margin: 0,
  padding: 0,
  variants: {
    color: {
      primary: { color: '$neutral8' },
      secondary: { color: '$neutral7' },
      'dark-primary': { color: '$neutral1' },
      'dark-secondary': { color: '$neutral3' },
    },
    weight: {
      medium: { fontWeight: '400' },
      bold: { fontWeight: '600' },
    },
  },
};

function defaultSizes(size: number): Size {
  const sizes: { [x: number]: Size } = {
    16: { fontSize: '16px', lineHeight: '24px' },
    20: { fontSize: '20px', lineHeight: '28px' },
    24: { fontSize: '24px', lineHeight: '32px' },
    32: { fontSize: '32px', lineHeight: '40px' },
    40: { fontSize: '40px', lineHeight: '48px' },
  };
  return sizes[size];
}

export const H1 = styled('h1', {
  ...defaultSettingHeading,
  variants: {
    ...defaultSettingHeading.variants,
    size: {
      small: defaultSizes(24),
      medium: defaultSizes(32),
      normal: defaultSizes(40),
    },
  },
});

export const H2 = styled('h2', {
  ...defaultSettingHeading,
  variants: {
    ...defaultSettingHeading.variants,
    size: {
      small: defaultSizes(20),
      medium: defaultSizes(24),
      normal: defaultSizes(32),
    },
  },
});

export const H3 = styled('h3', {
  ...defaultSettingHeading,
  variants: {
    ...defaultSettingHeading.variants,
    size: {
      small: defaultSizes(16),
      medium: defaultSizes(20),
      normal: defaultSizes(24),
    },
  },
});

export const H4 = styled('h4', {
  ...defaultSettingHeading,
  variants: {
    ...defaultSettingHeading.variants,
    size: {
      small: { lineHeight: '24px' },
      medium: defaultSizes(16),
      normal: defaultSizes(20),
    },
  },
});
