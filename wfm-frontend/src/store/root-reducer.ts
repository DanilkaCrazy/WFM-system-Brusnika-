import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';
import { staffProcess } from './staff-process/staff-process';
import { calculatorProcess } from './calculator-process/calculator-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Staff]: staffProcess.reducer,
  [NameSpace.Calculator]: calculatorProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});
