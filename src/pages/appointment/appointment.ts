import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import {BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';

let apiUrl = 'http://178.128.100.177/securitysys';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  public infoID;
  items: any = [];
  public Data = { id:"", company:"", purpose_id:"",time:"" , date:"", contact:"", department:"",inf_tel:"", reason:"", finish:""};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicesProvider,
    public http: HttpClient,
    private barcodeScanner: BarcodeScanner) {
      typeof this.navParams.get('infoID') == 'undefined' ? this.infoID = 'root' : this.infoID = this.navParams.get('infoID');
      this.getAppointment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  getAppointment(){
    this.service.getData('/api/appointment').then((result)=>{
      this.items = result; 
      console.log ('List of getAppointment', this.items);
      localStorage.setItem('appointment', this.items);
    },(err) => {
      // console.log(err);
    });
  }

}
