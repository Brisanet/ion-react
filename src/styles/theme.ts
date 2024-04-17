import { css } from 'styled-components';

export default {
  font: {
    family: 'Source Sans Pro, sans-serif',
    size: {
      12: css`
        font-size: 1.2rem;
        line-height: 1.6rem;
      `,
      14: css`
        font-size: 1.4rem;
        line-height: 2rem;
      `,
      16: css`
        font-size: 1.6rem;
        line-height: 2.4rem;
      `,
      20: css`
        font-size: 2rem;
        line-height: 2.8rem;
      `,
      24: css`
        font-size: 2.4rem;
        line-height: 3.2rem;
      `,
      32: css`
        font-size: 3.2rem;
        line-height: 4rem;
      `,
      40: css`
        font-size: 4rem;
        line-height: 4.8rem;
      `,
    },
  },
  colors: {
    main: {
      primary: '#0858ce',
      secondary: '#ebf3fe',
      neutral: '#505566',
      success: '#2d9f70',
      negative: '#d6293a',
      warning: '#f9a915',
      info: '#0bb2cb',
    },
    primary: {
      1: '#ebf3fe',
      2: '#b5d2fc',
      3: '#84b4fa',
      4: '#5396f8',
      5: '#146ff5',
      6: '#0858ce',
      7: '#06439d',
      8: '#042a62',
    },
    neutral: {
      1: '#fcfcfd',
      2: '#f2f3f5',
      3: '#e4e6eb',
      4: '#ced2db',
      5: '#aeb2bd',
      6: '#8d93a5',
      7: '#505566',
      8: '#282b33',
    },
    positive: {
      1: '#e7f9f1',
      2: '#cbf0e1',
      3: '#9ce3c5',
      4: '#60d2a3',
      5: '#35bb83',
      6: '#2d9f70',
      7: '#227754',
      8: '#19583d',
    },
    negative: {
      1: '#faeaec',
      2: '#f7d4d8',
      3: '#efa9b0',
      4: '#e77e89',
      5: '#de5462',
      6: '#d6293a',
      7: '#ab212f',
      8: '#8d1b26',
    },
    warning: {
      1: '#fff5e0',
      2: '#feedcd',
      3: '#fcdb9c',
      4: '#fbc86a',
      5: '#faba42',
      6: '#f9a915',
      7: '#e09306',
      8: '#b87905',
    },
    info: {
      1: '#e2f9fd',
      2: '#cff6fc',
      3: '#9eeefa',
      4: '#55e1f6',
      5: '#0ccbe9',
      6: '#0bb2cb',
      7: '#0994aa',
      8: '#077283',
    },
    presets: {
      1: '#d96d36',
      2: '#d99f2b',
      3: '#98b212',
      4: '#02c242',
      5: '#3dccb4',
      6: '#4595e5',
      7: '#3956e5',
      8: '#9b50e5',
      9: ' #d94cd9',
      10: '#d94c92',
    },
    transparency: {
      black: {
        90: '#000000e5',
        75: '#000000bf',
        60: '#00000099',
        45: '#00000073',
        30: '#0000004d',
        15: '#00000026',
      },
      white: {
        90: '#ffffffe5',
        75: '#ffffffbf',
        60: '#ffffff99',
        45: '#ffffff73',
        30: '#ffffff4d',
        15: '#ffffff26',
      },
    },
  },
  utils: {
    flex: {
      start: (gap = 0) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${gap}px;
      `,
      center: (gap = 0) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${gap}px;
      `,
      spaceBetween: (gap = 0) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${gap}px;
      `,
    },
    ellipsis: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    shadow: {
      1: css`
        box-shadow: 0px 0px 4px 0px #00000026;
      `,
      2: css`
        box-shadow: 0px 8px 6px -4px #00000026;
      `,
      doubleShadow: css`
        box-shadow: 0px 0px 2px 0px #00000026, 0px 8px 6px -4px #00000026;
      `,
    },
    focus: css`
      &:focus-visible {
        outline: 2px solid #146ff5;
        outline-offset: 2px;
      }
    `,
  },
} as const;
