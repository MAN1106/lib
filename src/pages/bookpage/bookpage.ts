import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the BookpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookpage',
  templateUrl: 'bookpage.html',
})
export class BookpagePage {
  node :string;
  sub_node:string;
  subcategory=[];
  publication =[];
  
  key = [];
  title = [];
  category = [];
  source=[];
  price=[];
  publishedyear = [];
  authorname = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node = this.navParams.get('sub_category');
    this.sub_node = this.navParams.get('title'); 
    console.log(this.sub_node);   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookpagePage');
    console.log(this.node+" "+this.sub_node);
    firebase.database().ref('/library/'+this.node+'/').orderByChild('title').equalTo(this.sub_node).once('value').then((snapshot)=> {
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
        //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
        //this.category.push(this.title);
        //this.title=[];
      })    
        
    });
  }

}
