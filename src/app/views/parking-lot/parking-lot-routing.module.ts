import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ParkingLotComponent} from './parking-lot.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingLotComponent,
    data: {
      title: 'ParkingLot'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingLotRoutingModule {
}
