import stitches from '../../../stitches.config';
import { defaultSizes, defaultColor } from '../utils-typhography';
const { styled } = stitches;

const defaultSettingHeading = {
  margin: 0,
  padding: 0,
  variants: {
    color: {
      primary: defaultColor('neutral8'),
      secondary: defaultColor('neutral7'),
      'dark-primary': defaultColor('neutral1'),
      'dark-secondary': defaultColor('neutral3'),
    },
    weight: {
      medium: { fontWeight: '400' },
      bold: { fontWeight: '600' },
    },
  },
};

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
