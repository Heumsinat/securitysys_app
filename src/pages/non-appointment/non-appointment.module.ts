import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonAppointmentPage } from './non-appointment';

@NgModule({
  declarations: [
    NonAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(NonAppointmentPage),
  ],
})
export class NonAppointmentPageModule {}
