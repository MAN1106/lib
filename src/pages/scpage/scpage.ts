import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ScpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scpage',
  templateUrl: 'scpage.html',
})
export class ScpagePage {
  node :String;
  sub_node:String;
  sub:String;
  key = [];
  title = [];
  category = [];
  subcategory = [];
  price = [];
  t:string;
  source = [];
  publishedyear = [];
  publication = [];
  authorname = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node = this.navParams.get('node');
    this.sub_node = this.navParams.get('sub-node');
    this.sub = this.navParams.get('sub');
    this.t = this.navParams.get('title');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScpagePage');
    firebase.database().ref('/library/'+this.node+'/'+this.sub_node+'/'+this.sub+'/').orderByChild('title').equalTo(this.t).once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
        var key =childSnapshot.key;
        this.key.push(key);
        var value =childSnapshot.child('title').val();
        this.title.push(value);
        var value =childSnapshot.child("Category").val();
        this.category.push(value);
        var value =childSnapshot.child("Sub_category").val();
        this.subcategory.push(value);
        var value =childSnapshot.child("price").val();
        this.price.push(value);
        var value =childSnapshot.child("source").val();
        this.source.push(value);
        var value =childSnapshot.child("published_year").val();
        this.publishedyear.push(value);
        var value =childSnapshot.child("Publication").val();
        this.publication.push(value);
        var value =childSnapshot.child("author_name").val();
        this.authorname.push(value);
      })    
      console.log(this.title);
    });
  }

}
