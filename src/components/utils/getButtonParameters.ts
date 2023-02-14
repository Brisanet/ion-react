/**
 * Function to prevent repetition of style blocks.
 *
 * @param buttonSize - Height and min-width
 * @param padding - Button padding
 * @param fontSize - The size of font
 * @returns An Javascript object containing size properties.
 */
export function getButtonSize(
  buttonSize: string,
  padding: string,
  fontSize: string
) {
  let size = {
    height: buttonSize,
    minWidth: buttonSize,
    padding: padding,
    fontSize: fontSize,
  };

  return size;
}
