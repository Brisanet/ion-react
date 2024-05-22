/**
 * Get a size value based on its type.
 * @param {string | number} value - The size value.
 * @returns The value itself if it's a string, or the value in pixels if it is a number.
 **/
export const convertSizeValue = (value: string | number): string =>
  typeof value === 'number' ? `${value}px` : value;
