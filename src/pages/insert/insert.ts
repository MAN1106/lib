import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';
import { AngularFireDatabase } from 'angularfire2/database';
import { profile } from '../../models/insert/profile.interface';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
  profile = {} as profile;
  private listref;
  aa : string;
  b : LoggedinPage
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
  // this.aa = this.b.a1();
  }
  
  ionViewDidLoad() {
    console.log(this.aa);
  }
  insert(){
    this.listref=this.database.list('/library/Book_Name/');
    this.listref.push(this.profile);
    this.listref=this.database.list('/library/Category/'+this.profile.Category+'/'+this.profile.Sub_category);
    this.listref.push(this.profile);
    this.listref=this.database.list('/library/Author/'+this.profile.author_name);
    this.listref.push(this.profile);
    this.listref=this.database.list('/library/Price/'+this.profile.price);
    this.listref.push(this.profile);
    this.listref=this.database.list('/library/Published_year/'+this.profile.published_year);
    this.listref.push(this.profile);
    this.listref=this.database.list('/library/Source/'+this.profile.source);
    this.listref.push(this.profile); 
    this.listref=this.database.list('/library/Publication/'+this.profile.Publication);
    this.listref.push(this.profile); 
    this.navCtrl.setRoot(DeletePage);
  }

}
