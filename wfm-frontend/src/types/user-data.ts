import { Role } from './role';

export type UserData = {
  id: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  role: Role;
  avatarUrl?: string;
};
