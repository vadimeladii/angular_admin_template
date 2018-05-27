import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Camera} from '../../model/camera';

@Injectable()
export class CameraService {

  constructor(private http: Http) {
  }

  public getAll() {
    return this.http.get('http://104.196.102.76/camera')
      .map(this.extractTeams);
  }

  private extractTeams(response: Response) {
    const array: Array<Camera> = [];
    response.json().forEach(camera => {
      array.push(new Camera(camera.id, camera.number));
      });
    return array;
  }
}
