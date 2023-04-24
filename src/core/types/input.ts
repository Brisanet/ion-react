export const inputTypes = ['password', 'text', 'number', 'email'] as const;
export type InputType = (typeof inputTypes)[number];
