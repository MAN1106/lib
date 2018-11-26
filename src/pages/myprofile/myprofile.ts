import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  username =  [] ;
  mobile= [];
  name= [];
  email= [];
  user : string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.user =  navParams.data;
  console.log(this.user);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
    firebase.database().ref('/user/').orderByChild('email').equalTo(this.user).once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         console.log(key);
         var value =childSnapshot.child("email").val();
         this.email.push(value);
         var name1 =childSnapshot.child("name").val();
         this.name.push(name1);
         var value1 =childSnapshot.child("mobile").val();
         this.mobile.push(value1);
         var value2 =childSnapshot.child("username").val();
         this.username.push(value2);
         //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
  
      })    
        
    });
  }

}
