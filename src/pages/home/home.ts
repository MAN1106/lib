import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InsertPage } from '../insert/insert';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';
import firebase from 'firebase';
import { LoggedinPage } from '../loggedin/loggedin';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password : string;
  pass :string;

  constructor(public navCtrl: NavController,public auth : AngularFireAuth) {}
  
  login()
  {
  //   firebase.database().ref('/user/').orderByChild('username').equalTo(this.username).once('value').then((snapshot)=> {
  //   //var username = snapshot.forEach;
  
  //   snapshot.forEach((childSnapshot)=>{

  //      var key =childSnapshot.key;
  //      var value =childSnapshot.child("password").val();
  //     this.pass=value;
  //   })
  // });
   
    
  //   if(this.password==this.pass)
    this.auth.auth.signInWithEmailAndPassword(this.username,this.password).then((user)=>
    {
      
      this.navCtrl.setRoot(LoggedinPage,{user : this.username});
      
    })
    .catch(error=>{
      alert(error);
    })
    
  
  }
  goSignup()
  {
   
    this.navCtrl.push(SignupPage);
  }

  
}
