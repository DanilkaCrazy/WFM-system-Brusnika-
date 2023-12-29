import { Role } from './role';

export type RegistrationData = {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: Role;
  login: string;
  password: string;
};
