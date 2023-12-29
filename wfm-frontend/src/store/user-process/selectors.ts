import { NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { State } from '../../types/state';
import { UserProcessState } from './user-process';

export const getUserData = (state: State): UserProcessState => state[NameSpace.User];
export const getUserId = (state: State): string | undefined => state[NameSpace.User].id;
export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
