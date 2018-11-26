import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ViewListPage } from '../view-list/view-list';
import { SubcategoryPage } from '../subcategory/subcategory';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
private key = [];
private title  = [];
private a :string;
private b :string;
private val : string;
public show :boolean;
  len = [];
  no = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.a= (this.navParams.get('sub_category'));
  this.b =(this.navParams.get('title'));   
  if(this.a=='Author'){
    this.val = 'Books written By '+this.b;
    this.show=true;
  }
  else if(this.a=='Category'){
    this.show=false;
    this.val = 'Subcategories under '+this.b;
  }
  else if(this.a=='Price'){
    this.val = 'Books At Rs. '+this.b;
    this.show=true;
  }
  else if(this.a=='Publication'){
    this.val = 'Books By '+this.b;
    this.show=true;
  }
  else if(this.a=='Published_year'){
    this.val = 'Books Published on '+this.b;
    this.show=true;
  }
  else if(this.a=='Source'){
    this.val = 'Books From '+this.b;
    this.show=true;
  }
  }


  ionViewDidLoad() {
    
    console.log(this.show);
    console.log('ionViewDidLoad CategoryPage');
    firebase.database().ref('/library/'+this.a+'/'+this.b+'/').orderByChild('title').once('value').then((snapshot)=> {  
    
      snapshot.forEach((childSnapshot)=>{
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
         this.title.push(value); 
      })
      if(this.a=='Category'){
      for(var i=0;i<this.key.length;i++){
       var le =0;
        firebase.database().ref('/library/'+this.a+'/'+this.b+'/'+this.key[i]).orderByChild('title').once('value').then((snapshot)=> {  
          le = snapshot.numChildren();
          // snapshot.forEach((childSnapshot)=>{
          // //  le++;
          // })
      //     console.log(le);
       this.len.push(le);  
      });
  
    }
  }
    //console.log(this.len);     
    });
    
  }
move(i){
  if(this.a!="Category"){
  
    this.navCtrl.push(ViewListPage,{
    'node' : this.a,
    'sub-node': this.b,
    'title': this.title[i]
  })
  }
  else {
    console.log(this.key[i])
  this.navCtrl.push(SubcategoryPage,{
    'node' : this.a,
    'sub-node': this.b,
    'title': this.key[i]
  })
}
}
}
