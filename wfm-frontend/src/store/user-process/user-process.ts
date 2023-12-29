import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus as Status, NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user-data';

export type UserProcessState = Partial<UserData> & {
  authStatus: AuthStatus;
};

const initialState: UserProcessState = {
  authStatus: 'Unknown',
  id: undefined,
  first_name: undefined,
  last_name: undefined,
  patronymic: undefined,
  role: undefined,
  avatarUrl: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.patronymic = action.payload.patronymic;
      state.role = action.payload.role;
      state.avatarUrl = action.payload.avatarUrl;
    },
    clearUserData: (state) => {
      state.id = undefined;
      state.first_name = undefined;
      state.last_name = undefined;
      state.patronymic = undefined;
      state.role = undefined;
      state.avatarUrl = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = Status.NoAuth;
      });
  }
});

export const { setUserData, clearUserData } = userProcess.actions;
