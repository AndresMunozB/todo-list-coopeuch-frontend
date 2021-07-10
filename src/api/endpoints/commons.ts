export const TIME_STAMP = `${process.env.REACT_APP_API}/timeStamp`;

export type TimeStampResponse = {
  date: string;
  time: string;
};

export const isTimeStampResponse = (timeStampResponse: TimeStampResponse): boolean =>
  typeof timeStampResponse?.date === 'string' && typeof timeStampResponse?.time === 'string';
