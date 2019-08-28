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
  data:any;
  responseData : any;
  public ifMoto: boolean = false;
  public ifTruck: boolean = false;
  options :BarcodeScannerOptions;
  qrData= null;
  createdCode = null;
  scannedCode = null;
  public Data = { id:"", company:"", purpose_id:"",time:"" , date:"", contact:"", department:"",inf_tel:"", reason:"", finish:"",IC:"", Name:"", Comeby:"", Purpose:""};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicesProvider,
    public http: HttpClient,
    private barcodeScanner: BarcodeScanner) {
      typeof this.navParams.get('infoID') == 'undefined' ? this.infoID = 'root' : this.infoID = this.navParams.get('infoID');
      this.getAppointment();
      this.data = navParams.get('item');
      console.log ("test data=",this.data);
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

  Detail(item){
    this.navCtrl.push(
      AppointmentPage, {
       infoID: 'C1',
       item: item   
    });
  }

  onChange(value){
    console.log("test val =", value)
    if(value == "moto"){
      this.ifMoto = true;
      this.ifTruck = false;
    }else if (value == "truck"){
      this.ifTruck = true;
      this.ifMoto = false;
    }
    console.log("this.ifMoto =",this.ifMoto);
    console.log("this.ifTruck =",this.ifTruck);
  }

  scanCode(){
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log("this.scannedCode =",barcodeData);
      this.scannedCode = barcodeData.text;
    }, (err) => {
      console.log("Error occured : " + err);
    });     
  }

}
