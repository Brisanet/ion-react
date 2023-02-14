/**
 * Get the base spacing value.
 *
 * @param {number} level - Level of spacing. 
 * @return Spacing value in pixels.
// @example margin: spacing(1); // margin: '8px';
 */
export function spacing(level: number) {
  return `${level * 8}px`;
}
