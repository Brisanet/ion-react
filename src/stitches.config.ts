import { createStitches } from '@stitches/react';

const stitches = createStitches({
  media: {
    //BreakPoints
    bp1: '(minwidth: 320px)',
    bp2: '(minwidth: 768px)',
    bp3: '(minwidth: 1200px)',
  },
  theme: {
    colors: {
      // Primary colors
      primary1: '#ebf3fe',
      primary2: '#b5d2fc',
      primary3: '#84b4fa',
      primary4: '#5396f8',
      primary5: '#146ff5',
      primary6: '#0858ce',
      primary7: '#06439d',
      primary8: '#042a62',

      // Neutral colors
      neutral1: '#fcfcfd',
      neutral2: '#f2f3f5',
      neutral3: '#e4e6eb',
      neutral4: '#ced2db',
      neutral5: '#aeb2bd',
      neutral6: '#8d93a5',
      neutral7: '#505566',
      neutral8: '#282b33',

      // Indicative colors
      // Positive
      positive1: '#e7f9f1',
      positive2: '#cbf0e1',
      positive3: '#9ce3c5',
      positive4: '#60d2a3',
      positive5: '#35bb83',
      positive6: '#2d9f70',
      positive7: '#227754',
      positive8: '#19583d',

      // Negative
      negative1: '#faeaec',
      negative2: '#f7d4d8',
      negative3: '#efa9b0',
      negative4: '#e77e89',
      negative5: '#de5462',
      negative6: '#d6293a',
      negative7: '#ab212f',
      negative8: '#8d1b26',

      // Warning
      warning1: '#fff5e0',
      warning2: '#feedcd',
      warning3: '#fcdb9c',
      warning4: '#fbc86a',
      warning5: '#faba42',
      warning6: '#f9a915',
      warning7: '#e09306',
      warning8: '#b87905',

      // Info
      info1: '#e2f9fd',
      info2: '#cff6fc',
      info3: '#9eeefa',
      info4: '#55e1f6',
      info5: '#0ccbe9',
      info6: '#0bb2cb',
      info7: '#0994aa',
      info8: '#077283',

      // Preset colors
      presets1: '#d96d36',
      presets2: '#d99f2b',
      presets3: '#98b212',
      presets4: '#02c242',
      presets5: '#3dccb4',
      presets6: '#4595e5',
      presets7: '#3956e5',
      presets8: '#9b50e5',
      presets9: ' #d94cd9',
      presets10: '#d94c92',

      // Transparences
      // Black transparence
      blacktransparence90: '#000000e5',
      blacktransparence75: '#000000bf',
      blacktransparence60: '#00000099',
      blacktransparence45: '#00000073',
      blacktransparence30: '#0000004d',
      blacktransparence15: '#00000026',

      // White transparence
      whitetransparence90: '#ffffffe5',
      whitetransparence75: '#ffffffbf',
      whitetransparence60: '#ffffff99',
      whitetransparence45: '#ffffff73',
      whitetransparence30: '#ffffff4d',
      whitetransparence15: '#ffffff26',

      // Main colors
      primaryColor: '#0858ce',
      secondaryColor: '#ebf3fe',
      neutralColor: '#505566',
      successColor: '#2d9f70',
      negativeColor: '#d6293a',
      warningColor: '#f9a915',
      infoColor: '#0bb2cb',
    },
  },
});

const injectGlobalStyles = stitches.globalCss({
  '*': {
    boxSizing: 'borderbox',
    fontFamily: 'Source Sans Pro, sans-serif',
    border: 'none',
  },
  '*:after': {
    boxSizing: 'borderbox',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  '*:before': {
    boxSizing: 'borderbox',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  '@font-face': [
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro ExtraLight"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-ExtraLight.woff") format("woff")',
      fontWeight: '300',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro ExtraLight Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-ExtraLightIt.woff") format("woff")',
      fontWeight: '300',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Light"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-Light.woff") format("woff")',
      fontWeight: '300',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Light Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-LightIt.woff") format("woff")',
      fontWeight: '300',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Regular"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-Regular.woff") format("woff")',
      fontWeight: 'normal',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-It.woff") format("woff")',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Semibold"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-Semibold.woff") format("woff")',
      fontWeight: '500',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Semibold Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-SemiboldIt.woff") format("woff")',
      fontWeight: '500',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Bold"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-Bold.woff") format("woff")',
      fontWeight: 'bold',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Bold Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-BoldIt.woff") format("woff")',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Black"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-Black.woff") format("woff")',
      fontWeight: '800',
    },
    {
      fontFamily: 'Source Sans Pro',
      src: 'local("Source Sans Pro Black Italic"), url("https://fonts.cdnfonts.com/s/12183/SourceSansPro-BlackIt.woff") format("woff")',
      fontWeight: '800',
      fontStyle: 'italic',
    },
  ],

  body: { margin: 0, padding: 0 },
  h1: { margin: 0 },
});

injectGlobalStyles();

export default stitches;
