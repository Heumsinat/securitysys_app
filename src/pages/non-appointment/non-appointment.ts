import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import {BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the NonAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-non-appointment',
  templateUrl: 'non-appointment.html',
})
export class NonAppointmentPage {
  public Data = { IC:"", Name:"", Comeby:"", Purpose:"", ContactPerson:""};
  responseData : any;
  public ifMoto: boolean = false;
  public ifTruck: boolean = false;
  // scanData : {};
  // encodeData : string ;
  // encodedData : {} ;
  options :BarcodeScannerOptions;
  qrData= null;
  createdCode = null;
  scannedCode = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicesProvider,
    private barcodeScanner: BarcodeScanner) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NonAppointmentPage');
  }

  Save(){
    this.service.postData(this.Data,'/saveattendance').then((result) => {
    this.responseData = result;
    console.log("this.responseData===", this.responseData);
    if(result){
      this.navCtrl.popToRoot();
    }
   }, (err) => {
      // console.log(err);
   });
  }

  onChange(value){
    console.log("test val =", value)
    if(value == "moto"){
      this.ifMoto = true;
    }else if (value == "truck"){
      this.ifTruck = true;
    }
    console.log("this.ifMoto =",this.ifMoto);
    console.log("this.ifTruck =",this.ifTruck);
  }

  scanCode(){
    // this.options = {
    //   prompt : "Scan your barcode "
    // }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log("this.scannedCode =",barcodeData);
      this.scannedCode = barcodeData.text;
    }, (err) => {
      console.log("Error occured : " + err);
    });     
  }
  createCode(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.qrData).then((encodedData) => {

        console.log("this.createdCode =",encodedData);
        this.createdCode = encodedData;

    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}
}
