type ColorStyle = {
  background: string;
  color: string;
  border?: string;
};

/**
 * Function to prevent repetition of style blocks.
 *
 * @param bgColor - Background color
 * @param fontColor - The font color
 * @param borderColor - Optional param to add a border color
 * @returns An Javascript object containing color properties.
 */
export function getBgFontBorderColors(
  background: string,
  font: string,
  border: string
) {
  let styles: ColorStyle = {
    background: background,
    color: font,
    [border]: border,
  };

  return styles;
}
