import {User} from './user';

export class Car {
  id: number;
  number: string;
  user: User;

  constructor(id: number, number: string, user: User) {
    this.id = id;
    this.number = number;
    this.user = user;
  }
}
