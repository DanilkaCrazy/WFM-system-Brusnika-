export type WorkerInput = {
  role: string;
  count: number;
  minCount: number;
  salary: number;
} & { [key: string]: string | number };
