import { UserData } from '../types/user-data';

export const staffMock: UserData[] = [
  {
    id: '0',
    firstName: 'Иван',
    lastName: 'Иванов',
    patronymic: 'Иванович',
    role: 'Employee',
    avatarUrl: undefined,
  },
  {
    id: '1',
    firstName: 'Григорий',
    lastName: 'Туманов',
    patronymic: 'Андреевич',
    role: 'Leader',
    avatarUrl: 'https://unila.ru/upload/posts/medium/e208cfdb71dce38c67959f65a3b64e62.jpg',
  },
  {
    id: '2',
    firstName: 'Тихон',
    lastName: 'Казаков',
    patronymic: 'Дмитриевич',
    role: 'Manager',
    avatarUrl: undefined,
  },
  {
    id: '3',
    firstName: 'Алина',
    lastName: 'Кондрашова',
    patronymic: 'Матвеевна',
    role: 'Employee',
    avatarUrl: undefined,
  },
];
