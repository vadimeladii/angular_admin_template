import {Component, OnInit} from '@angular/core';
import {getStyle} from '@coreui/coreui/js/src/utilities/';
import {Http} from '@angular/http';
import {CarService} from './car.service';
import {Car} from '../../model/car';

@Component({
  templateUrl: 'car.component.html',
  providers: [CarService]
})
export class CarComponent implements OnInit {

  cars: Array<Car>;

  constructor(private http: Http, private carService: CarService) {
    this.carService.getAll().subscribe(
      cars => {
        this.cars = cars;
        console.log(cars);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }
}
