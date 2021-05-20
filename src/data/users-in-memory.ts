import { User } from '@/model/user';

const user: User[] = [];

const initialValues: User[] = [
  {
    id: 1,
    name: 'Gustavo Alexandre Nobre Mesquita',
    email: 'Gustavo@email.com.br'
  },
  {
    id: 2,
    name: 'Tom Cruise of Mission Impossible',
    email: 'TCruise@email.com'
  }
];

user.push(...initialValues);

export default user;
