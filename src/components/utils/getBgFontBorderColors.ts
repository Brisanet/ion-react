interface ParamStyles {
  background: string;
  color: string;
  border?: string;
}

/**
 * Function to prevent repetition of style blocks.
 *
 * @param background - Background color
 * @param color - The font color
 * @param border - Border attribute - example: ´1px solid blue´
 * @returns An Javascript object containing color properties.
 */
export function getBgFontBorderColors(
  background: string,
  color: string,
  border: string = ''
): ParamStyles {
  function borderSentence(border: string): string {
    return border && border.includes('px') ? border : 'none';
  }

  return {
    background,
    color,
    border: borderSentence(border),
  };
}
