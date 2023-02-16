interface SizeStyles {
  buttonSize: string;
  padding: string;
  fontSize?: string;
}

/**
 * Function to prevent repetition of style blocks.
 *
 * @param buttonSize - Height and min-width
 * @param padding - Button padding
 * @param fontSize - The size of font
 * @returns A Javascript object containing size properties.
 */
export function getButtonSize({ buttonSize, padding, fontSize }: SizeStyles) {
  let size = {
    height: buttonSize,
    minWidth: buttonSize,
    padding,
    fontSize,
  };

  return size;
}
