import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { InsertPage } from '../insert/insert';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  insert = InsertPage;
  public a:string;
  delete = DeletePage;
  update = MyprofilePage;
  search = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.a = this.navParams.get('user');
    // console.log(this.a);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  

}
