import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { postCalculatorInputsAction } from '../api-actions';
import { CalculatorResult } from '../../types/calculator-result';

export type CalculatorProcessState = {
  workersCount?: number;
  expenses?: number;
  calculating: boolean;
};

const initialState: CalculatorProcessState = {
  workersCount: undefined,
  expenses: undefined,
  calculating: false,
};

export const calculatorProcess = createSlice({
  name: NameSpace.Calculator,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postCalculatorInputsAction.pending, (state) => {
        state.workersCount = undefined;
        state.expenses = undefined;
        state.calculating = true;
      })
      .addCase(postCalculatorInputsAction.fulfilled, (state, action: PayloadAction<CalculatorResult>) => {
        state.workersCount = action.payload.workers1_final;
        state.expenses = action.payload.expenses;
        state.calculating = false;
      });
    // .addCase(postCalculatorInputsAction.rejected, (state) => {
    //   state.calculating = false;
    // });
  }
});
