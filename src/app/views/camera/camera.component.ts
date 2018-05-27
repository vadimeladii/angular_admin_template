import {Component, OnInit} from '@angular/core';
import {getStyle} from '@coreui/coreui/js/src/utilities/';
import {Http} from '@angular/http';
import {CameraService} from './camera.service';
import {Camera} from '../../model/camera';

@Component({
  templateUrl: 'camera.component.html',
  providers: [CameraService]
})
export class CameraComponent implements OnInit {

  cameras: Array<Camera>;

  constructor(private http: Http, private cameraService: CameraService) {
    this.cameraService.getAll().subscribe(
      cameras => {
        this.cameras = cameras;
        console.log(cameras);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }
}
