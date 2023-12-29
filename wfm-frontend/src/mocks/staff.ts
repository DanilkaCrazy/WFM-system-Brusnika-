import { UserData } from '../types/user-data';

export const staffMock: UserData[] = [
  {
    id: '0',
    first_name: 'Иван',
    last_name: 'Иванов',
    patronymic: 'Иванович',
    role: 'Employee',
    avatarUrl: undefined,
  },
  {
    id: '1',
    first_name: 'Григорий',
    last_name: 'Туманов',
    patronymic: 'Андреевич',
    role: 'Leader',
    avatarUrl: 'https://unila.ru/upload/posts/medium/e208cfdb71dce38c67959f65a3b64e62.jpg',
  },
  {
    id: '2',
    first_name: 'Тихон',
    last_name: 'Казаков',
    patronymic: 'Дмитриевич',
    role: 'Manager',
    avatarUrl: undefined,
  },
  {
    id: '3',
    first_name: 'Алина',
    last_name: 'Кондрашова',
    patronymic: 'Матвеевна',
    role: 'Employee',
    avatarUrl: undefined,
  },
];
