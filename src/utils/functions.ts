
export const range = (start: number, end: number): Array<number> => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};
