import stitches from '../../../stitches.config';
const { styled } = stitches;

const defaultSettingHeading = {
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
  spacingReset: { margin: 0, padding: 0 },
};

export const H1 = styled('h1', {
  ...defaultSettingHeading.spacingReset,
  variants: {
    color: defaultSettingHeading.color,
    size: {
      small: { fontSize: '24px', lineHeight: '32px' },
      medium: { fontSize: '32px', lineHeight: '40px' },
      normal: { fontSize: '40px', lineHeight: '48px' },
    },
    weight: defaultSettingHeading.weight,
  },
});

export const H2 = styled('h2', {
  ...defaultSettingHeading.spacingReset,
  variants: {
    color: defaultSettingHeading.color,
    size: {
      small: { fontSize: '20px', lineHeight: '28px' },
      medium: { fontSize: '24px', lineHeight: '32px' },
      normal: { fontSize: '32px', lineHeight: '40px' },
    },
    weight: defaultSettingHeading.weight,
  },
});

export const H3 = styled('h3', {
  ...defaultSettingHeading.spacingReset,
  variants: {
    color: defaultSettingHeading.color,
    size: {
      small: { fontSize: '16px', lineHeight: '24px' },
      medium: { fontSize: '20px', lineHeight: '28px' },
      normal: { fontSize: '24px', lineHeight: '32px' },
    },
    weight: defaultSettingHeading.weight,
  },
});

export const H4 = styled('h4', {
  ...defaultSettingHeading.spacingReset,
  variants: {
    color: defaultSettingHeading.color,
    size: {
      small: { lineHeight: '24px' },
      medium: { fontSize: '16px', lineHeight: '24px' },
      normal: { fontSize: '20px', lineHeight: '28px' },
    },
    weight: defaultSettingHeading.weight,
  },
});
