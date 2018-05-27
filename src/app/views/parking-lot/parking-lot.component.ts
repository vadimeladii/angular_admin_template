import {Component, OnInit} from '@angular/core';
import {getStyle} from '@coreui/coreui/js/src/utilities/';
import {Http} from '@angular/http';
import {ParkingLotService} from './parking-lot.service';
import {ParkingLot} from '../../model/parkingLot';

@Component({
  templateUrl: 'parking-lot.component.html',
  providers: [ParkingLotService]
})
export class ParkingLotComponent implements OnInit {

  parkingLots: Array<ParkingLot>;

  constructor(private http: Http, private testService: ParkingLotService) {
    this.testService.getAll().subscribe(
      parkingLots => {
        this.parkingLots = parkingLots;
        console.log(parkingLots);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }
}
