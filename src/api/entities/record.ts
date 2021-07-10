export type Record = {
  title: string;
  description: string;
};

export const isRecord = (record: Record): boolean =>
  typeof record?.title === 'string' && typeof record?.description === 'string';
