export type Currency = {
  id: number;
  name: string;
};

export const isCurrency = (currency: Currency): boolean =>
  typeof currency?.id === 'number' && typeof currency?.name === 'string';
