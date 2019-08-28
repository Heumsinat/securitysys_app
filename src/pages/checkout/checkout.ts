import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  options :BarcodeScannerOptions;
  scannedCode = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
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
