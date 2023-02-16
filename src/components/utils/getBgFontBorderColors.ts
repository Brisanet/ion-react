interface ObjStyles {
  background: string;
  color: string;
  border?: string;
}

/**
 * Function to prevent repetition of style blocks.
 *
 * @param background - Background color
 * @param color - The font color
 * @param border - Border attribute styles - example: ´1px solid blue´
 * @returns A Javascript object containing color properties.
 */
export function getBgFontBorderColors({
  background,
  color,
  border = '',
}: ObjStyles): ObjStyles {
  return {
    background,
    color,
    border,
  };
}
