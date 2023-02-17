const isValidLabel = (label: string) =>
  !!(label && !(String(label).trim() === ''));

export default isValidLabel;
