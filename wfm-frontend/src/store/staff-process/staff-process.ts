import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchStaffDataAction, fetchStaffMemberDataAction } from '../api-actions';
import { UserData } from '../../types/user-data';

export type StaffProcessState = {
  staff?: UserData[];
  staffMember?: UserData;
};

const initialState: StaffProcessState = {
  staff: undefined,
  staffMember: undefined,
};

export const staffProcess = createSlice({
  name: NameSpace.Staff,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStaffDataAction.pending, (state) => {
        state.staff = undefined;
      })
      .addCase(fetchStaffDataAction.fulfilled, (state, action: PayloadAction<UserData[]>) => {
        state.staff = action.payload;
      })
      .addCase(fetchStaffMemberDataAction.pending, (state) => {
        state.staffMember = undefined;
      })
      .addCase(fetchStaffMemberDataAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.staffMember = action.payload;
      });
  }
});
