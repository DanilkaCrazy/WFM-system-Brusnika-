import { NameSpace } from '../../consts';
import { CalculatorResult } from '../../types/calculator-result';
import { State } from '../../types/state';

export const isCalculating = (state: State): boolean => state[NameSpace.Calculator].calculating;
export const getCalculatorResult = (state: State): Partial<CalculatorResult> => state[NameSpace.Calculator];
