import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ScpagePage } from '../scpage/scpage';

/**
 * Generated class for the SubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {
  node :String;
  sub_node:String;
  t:string;
  key = [];
  title = [];
  category = [];
  sub_category = [];
  price = [];
  source = [];
  publishedyear = [];
  publication = [];
  authorname = [];
  no = [];
  len = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node = this.navParams.get('node');
  this.sub_node = this.navParams.get('sub-node');
  this.t = this.navParams.get('title');
  console.log(this.node);
  console.log(this.sub_node);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoryPage');
    firebase.database().ref('/library/'+this.node+'/'+this.sub_node+'/'+this.t+'/').orderByChild('title').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
         this.title.push(value); 
    });
    
   
  })    
  }
  move(i){
    this.navCtrl.push(ScpagePage,{
      'node' : this.node,
      'sub-node': this.sub_node,
      'sub':this.t,
      'title' : this.title[i]
    })
  }

}
