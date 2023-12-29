import { AppRoutes } from './app-routes';
import CalculatorSVG from './components/svg/calculator-svg';
import PlanningSVG from './components/svg/planning-svg';
import UserSVG from './components/svg/user-svg';
import ManagementSVG from './components/svg/management-svg';
import { NavLink } from './types/nav-link';
import { Role } from './types/role';
import StaffSVG from './components/svg/staff-svg';

export const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const Roles = {
  Employee: 'Сотрудник',
  Manager: 'Менеджер',
  Leader: 'Руководитель',
} as const;

export const RolesRU: { [key: string]: Role } = {
  'Сотрудник': 'Employee',
  'Менеджер': 'Manager',
  'Руководитель': 'Leader',
} as const;

export const NavLinksData: ReadonlyArray<NavLink> = [
  {
    Icon: <UserSVG />,
    Title: 'Личный кабинет',
    Href: AppRoutes.User.FullPath,
  },
  {
    Icon: <ManagementSVG />,
    Title: 'Система управления персоналом',
    Href: AppRoutes.Management.FullPath,
  },
  {
    Icon: <PlanningSVG />,
    Title: 'Планирование',
    Href: AppRoutes.Planning.FullPath,
  },
  {
    Icon: <CalculatorSVG />,
    Title: 'Калькулятор метрик',
    Href: AppRoutes.Calculator.FullPath,
  },
  {
    Icon: <StaffSVG />,
    Title: 'Сотрудники',
    Href: AppRoutes.Staff.FullPath,
  },
];

export const APIRoute = {
  User: 'user',
  Staff: 'staff',
  Calculator: 'calculator',
  Signup: 'signup',
  Login: 'login',
  Logout: 'logout',
} as const;

export const NameSpace = {
  User: 'User',
  Staff: 'Staff',
  Calculator: 'Calculator',
  Error: 'Error',
} as const;

export const ErrorCodesDesc: { [key: number]: string } = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
  408: 'Request Timeout',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
} as const;
