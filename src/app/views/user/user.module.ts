import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {UserComponent} from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    UserRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [UserComponent]
})
export class UserModule {
}
