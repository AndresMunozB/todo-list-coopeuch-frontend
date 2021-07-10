export type Color = {
  id: number;
  rgb: string;
};

export const isColor = (color: Color): boolean =>
  typeof color?.id === 'number' && typeof color?.rgb === 'string';
