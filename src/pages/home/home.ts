import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { NonAppointmentPage } from '../non-appointment/non-appointment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAppointment(){
    this.navCtrl.push(AppointmentPage);
  }
  
  goToNonAppointment(){
    this.navCtrl.push(NonAppointmentPage);
  }
}
