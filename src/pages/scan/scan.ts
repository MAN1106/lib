import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  createdCode = null;
  scannedCode = null;
  QR = null;
    constructor(public navCtrl: NavController, public navParams: NavParams,private br : BarcodeScanner) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ScannerPage');
    }
    scan(){
      this.br.scan().then(barcodedate=>{
        this.scannedCode = barcodedate.text;
      })
    }
    generate(){
      this.createdCode = this.QR
    }
  
  
}
