interface ReturnObjStyles {
  background: string;
  color: string;
  border: string;
}

/**
 * Function to prevent repetition of style blocks.
 *
 * @param background - Background color
 * @param color - The font color
 * @param borderStyles - Border attribute styles - example: ´1px solid blue´
 * @returns An Javascript object containing color properties.
 */
export function getBgFontBorderColors(
  background: string,
  color: string,
  borderStyles: string = ''
): ReturnObjStyles {
  return {
    background,
    color,
    border: borderStyles,
  };
}
