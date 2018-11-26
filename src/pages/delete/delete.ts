import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { UpdatePage } from '../update/update';
import { CategoryPage } from '../category/category';
import { BookpagePage } from '../bookpage/bookpage';
import { expand } from 'rxjs/operators';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {
  update = UpdatePage;
  expand : boolean = false;
  public title =[];
  public category=[];
  public publication:string[][][];
  //public sub_category=[];
  public authorname=[];
  public price:string[][];
  //public publishedyear=[];
  //public source=[];
  public key=[];
  public a :number;
  public  b :  number;
  public no = [];
  public len :number[][];
  public le : number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fdb:AngularFireDatabase) {
    // firebase.database().ref('/library/').orderByChild('title').once('value').then((snapshot)=> {
    //   //var username = snapshot.forEach;
    this.len = [];
    
    //   snapshot.forEach((childSnapshot)=>{
  
    //      var key =childSnapshot.key;
    //      this.key.push(key);
    //      var value =childSnapshot.key;
    //      this.title.push(value);
    //     //  var value =childSnapshot.child("Category").val();
    //     //  this.category.push(value);
    //     //  var value =childSnapshot.child("Sub_Category").val();
    //     //  this.sub_category.push(value);
    //     //  var value =childSnapshot.child("price").val();
    //     //  this.price.push(value);
    //     //  var value =childSnapshot.child("source").val();
    //     //  this.source.push(value);
    //     //  var value =childSnapshot.child("published_year").val();
    //     //  this.publishedyear.push(value);
    //     //  var value =childSnapshot.child("Publication").val();
    //     //  this.publication.push(value);
    //     //  var value =childSnapshot.child("author_name").val();
    //     //  this.authorname.push(value);
    //     //  //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
  
    //   })    
        
    // });
    this.price = [];
    
    this.publication =[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
    firebase.database().ref('/library/').orderByChild('Category').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
      snapshot.forEach((childSnapshot)=>{
         var key =childSnapshot.key;
         this.key.push(key);
         this.title.push(key);
         this.category.push(true);

         
      })    
    });
  }
  
  move(i){
    if(this.category[i]){
      this.price[i]=[];
      this.len[i]=[];
      this.publication[i]=[];
      if(this.title[i]!='Book_Name'){
      firebase.database().ref('/library/'+this.title[i]+'/').orderByChild('title').once('value').then((snapshot)=> {  
      snapshot.forEach((childSnapshot)=>{
      var key =childSnapshot.key;
      this.key.push(key);
      var value =childSnapshot.child('title').val();
      this.price[i].push(key); 
})
var j =0;
this.le =0;
for(j=0;j<this.price[i].length;j++){
  firebase.database().ref('/library/'+this.title[i]+'/'+this.price[i][j]+'/').orderByChild('title').once('value').then((snapshot)=> {   
    snapshot.forEach((childSnapshot)=>{
      var key =childSnapshot.key; 
      this.le++;
     }) 
     this.len[i].push(this.le);  
     this.le=0;
    })
 this.publication[i][j]=[];
}
})
}
    else{
      firebase.database().ref('/library/'+this.title[i]+'/').orderByChild('title').once('value').then((snapshot)=> {  
        snapshot.forEach((childSnapshot)=>{
        var key =childSnapshot.key;
        this.key.push(key);
        var value =childSnapshot.child('title').val();
        this.price[i].push(value);
        
  })
})
    }
    }
this.category[i] = !this.category[i];
}
m(i,j){
//   if(this.authorname[i]){
//       this.publication[j][i]=[];
//       firebase.database().ref('/library/'+this.title[j]+'/'+this.price[j][i]+'/').orderByChild('title').once('value').then((snapshot)=> {  
//       console.log(this.title[j]+this.price[j][i]);
//         snapshot.forEach((childSnapshot)=>{
//       var key =childSnapshot.key;
//       this.key.push(key);
//       var value =childSnapshot.child('title').val();
//       //console.log(value);
//       this.publication[j][i].push(value);
    
//       //this.authorname.push(true);
// })
//       })
//       this.a = j;
//       this.b = i;
//       console.log(this.publication[j][i]);
//   }
//   this.authorname[i] = !this.authorname[i];
  if(this.title[i]!="Book_Name"){
          this.navCtrl.push(CategoryPage,{
        'sub_category' : this.title[i],
        'title' : this.price[i][j]
      })
    }
  
  else{
    
      this.navCtrl.push(BookpagePage,{
    'sub_category' : this.title[i],
    'title' : this.price[i][j]
  })
  }
}
}

//     console.log(this.title[i])
//     if(this.title[i]!="Book_Name"){
//         this.navCtrl.push(CategoryPage,{
//       'sub_category' : this.title[i]
//     })
//   }

// else{
  
//     this.navCtrl.push(BookpagePage,{
//   'sub_category' : this.title[i]
// })
// }