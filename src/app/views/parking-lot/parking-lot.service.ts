import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ParkingLot} from '../../model/parkingLot';

@Injectable()
export class ParkingLotService {

  constructor(private http: Http) {
  }

  public getAll() {
    return this.http.get('http://104.196.102.76/parking-lot')
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<ParkingLot> = [];
    response.json().forEach(parkingLot => {
      array.push(new ParkingLot(parkingLot.id, parkingLot.name, parkingLot.totalPlaces, parkingLot.availablePlaces));
    });
    return array;
  }
}
