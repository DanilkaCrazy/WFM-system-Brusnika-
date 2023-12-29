import { Role } from './role';

export type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  role: Role;
  avatarUrl?: string;
};
