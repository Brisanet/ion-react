/**
 * Function to prevent repetition of style blocks.
 *
 * @param background - Background color
 * @param color - The font color
 * @param border - Border color
 * @returns An Javascript object containing color properties.
 */
export function getBgFontBorderColors(
  background: string,
  font: string,
  border: string
) {
  let styles = {
    background: background,
    color: font,
    border: border,
  };

  return styles;
}
