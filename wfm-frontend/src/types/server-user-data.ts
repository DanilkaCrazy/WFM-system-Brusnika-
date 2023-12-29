import { UserData } from './user-data';

export type ServerUserData = UserData & {
  token: string;
};
