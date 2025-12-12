export const paramToString = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value ?? "";
};

export const paramToNumber = (value?: string | string[]) => {
  const parsed = Number(paramToString(value));
  return Number.isNaN(parsed) ? 0 : parsed;
};
