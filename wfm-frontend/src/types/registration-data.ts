import { Role } from './role';

export type RegistrationData = {
  first_name: string;
  last_name: string;
  patronymic: string;
  role: Role;
  username: string;
  password: string;
};
