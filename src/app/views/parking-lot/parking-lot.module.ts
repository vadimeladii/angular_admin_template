import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {ParkingLotComponent} from './parking-lot.component';
import {ParkingLotRoutingModule} from './parking-lot-routing.module';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ParkingLotRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [ParkingLotComponent]
})
export class ParkingLotModule {
}
