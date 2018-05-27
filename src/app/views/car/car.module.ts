import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {CarComponent} from './car.component';
import {CarRoutingModule} from './car-routing.module';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CarRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [CarComponent]
})
export class CarModule {
}
