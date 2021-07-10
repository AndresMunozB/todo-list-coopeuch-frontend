export const TODOS = `${process.env.REACT_APP_API}/todos`;

export type TodoCreatePayload = {
  description: string;
};

export type TodoUpdatePayload = {
  id: number;
  description: string;
  done: boolean;
};
