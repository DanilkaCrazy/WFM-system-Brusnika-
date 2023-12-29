import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { postCalculatorInputsAction } from '../api-actions';
import { CalculatorResult } from '../../types/calculator-result';

export type CalculatorProcessState = {
  workers1_final?: number;
  workers2_final?: number;
  workers_pay?: number;
  calculating: boolean;
};

const initialState: CalculatorProcessState = {
  workers1_final: undefined,
  workers2_final: undefined,
  workers_pay: undefined,
  calculating: false,
};

export const calculatorProcess = createSlice({
  name: NameSpace.Calculator,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postCalculatorInputsAction.pending, (state) => {
        state.workers1_final = undefined;
        state.workers2_final = undefined;
        state.workers_pay = undefined;
        state.calculating = true;
      })
      .addCase(postCalculatorInputsAction.fulfilled, (state, action: PayloadAction<CalculatorResult>) => {
        state.workers1_final = action.payload.workers1_final;
        state.workers2_final = action.payload.workers2_final;
      state.workers_pay = action.payload.workers_pay;
        state.calculating = false; 
  });
    // .addCase(postCalculatorInputsAction.rejected, (state) => {
    //   state.calculating = false;
    // });
  }
});
