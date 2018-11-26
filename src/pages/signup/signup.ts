import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../models/insert/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  profile = {} as user;
  private listref=this.database.list('user');
  confirm: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase,public auth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup()
  { 
    if(this.profile.password==this.confirm){ 
    
    
    this.auth.auth.createUserWithEmailAndPassword(this.profile.email,this.profile.password).then((res)=>{
      this.listref.push(this.profile);
      this.navCtrl.popTo(HomePage)})
      .catch(error=>{
        alert(error);
      });
    }
    else{
      alert("Password doesn't match");
    }
}

}
