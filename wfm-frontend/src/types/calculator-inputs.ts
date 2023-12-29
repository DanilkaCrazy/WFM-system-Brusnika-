import { WorkerInput } from './worker-input';

export type CalculatorInputs = {
  workload: number;
  workPeriod: number;
  workerInputs: WorkerInput[];
};
