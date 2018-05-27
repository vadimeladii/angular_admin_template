import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Car} from '../../model/car';

@Injectable()
export class CarService {

  constructor(private http: Http) {
  }

  public getAll() {
    return this.http.get('http://104.196.102.76/car')
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<Car> = [];
    response.json().forEach(car => {
      array.push(new Car(car.id, car.number, car.userView));
      });
    return array;
  }
}
