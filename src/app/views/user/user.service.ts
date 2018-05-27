import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../../model/user';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  public getAll() {
    return this.http.get('http://104.196.102.76/user')
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<User> = [];
    response.json().forEach(user => {
      array.push(new User(user.id, user.username, user.password, user.email, user.balance));
    });
    return array;
  }
}
