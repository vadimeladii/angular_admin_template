import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {CameraComponent} from './camera.component';
import {CameraRoutingModule} from './camera-routing.module';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CameraRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [CameraComponent]
})
export class CameraModule {
}
