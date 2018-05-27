export class User {

  id: number;
  username: string;
  password: string;
  email: string;
  balance: number;

  constructor(id: number, username: string, password: string, email: string, balance: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.balance = balance;
  }
}
