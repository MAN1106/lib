import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  node :String;
  sub_node:string;
  sub_node1:string;
  hi:boolean = false;
  hi1:boolean = false;
  hi2:boolean = false ;
  hi3:boolean = false ;
  hi4:boolean = false ;
  key = [];
  h:boolean = true
  title : string[][];
  category = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node="Please choose a Filter type to Search.";
    this.title =[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  book(){
    this.hi=!this.hi;
    this.hi1=false;
    this.hi2=false;
    this.hi3=false;
    this.hi4=false;
    if(this.hi){this.h=true;
    this.node="Book Name";}
    else
    this.node="Please choose a Filter type to Search."
  }
  price(){
    this.hi=false;
    this.hi2=false;
    this.hi3=false;
    this.hi4=false;
    this.hi1=!this.hi1;
    if(this.hi1){
    this.h=false;
    this.node="Price";}
    else
    this.node="Please choose a Filter type to Search."
  }
  category1(){
    this.hi1=false;
    this.hi2=false;
    this.hi=false;
    this.hi4=false;
    this.hi3=!this.hi3;
    if(this.hi3){
    this.h=true;
    this.node="Category";
    }
    else
    this.node="Please choose a Filter type to Search."
  }
  published(){
    this.hi1=false;
    this.hi2=false;
    this.hi3=false;
    this.hi=false;
    this.hi4=!this.hi4;
    if(this.hi4){this.h=true;
    this.node="Published";}
    else
    this.node="Please choose a Filter type to Search."
  }
  author(){
    this.hi1=false;
    this.hi=false;
    this.hi3=false;
    this.hi4=false;
    this.hi2=!this.hi2;
    if(this.hi2){this.h=true;
    this.node="Author Name";}
    else
    this.node="Please choose a Filter type to Search."
  }
  search(h,h1,h2,h3,h4){
    this.title=[];
    console.log(h+h1+h2+h3+h4);
    if(h){
      this.s("title");
    }   
    else if(h1){
      this.s1("price");
    }   
    else if(h2){
      this.s("author_name");
    }   
    else if(h3){
      this.s("Category");
    }   
    else if(h4){
      this.s("published_year");
    }   
  }
  s1(arg0) {
    console.log(arg0);
    firebase.database().ref('/library/Book_Name/').orderByChild(arg0).startAt(this.sub_node).endAt(this.sub_node1).once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
      var i =0;
      console.log(snapshot.numChildren());
      snapshot.forEach((childSnapshot)=>{
        var key =childSnapshot.key;
         this.key.push(key);
        
        this.title[i]=[]
         var value =childSnapshot.child('title').val();
        this.title[i].push(value);
        var value =childSnapshot.child("Category").val();
        this.title[i].push(value);
        //this.category.push(value);
        var value =childSnapshot.child("Sub_category").val();
        //this.sub_category.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("price").val();
        //this.price.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("source").val();
        //this.source.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("published_year").val();
        //this.publishedyear.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("Publication").val();
        //this.publication.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("author_name").val();
        //this.authorname.push(value);
        this.title[i].push(value);
        //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
        i++;
      })    
        
    });
  }

  s(node1){
    console.log(node1);
    firebase.database().ref('/library/Book_Name/').orderByChild(node1).equalTo(this.sub_node).once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
      var i =0;
      console.log(snapshot.numChildren());
      snapshot.forEach((childSnapshot)=>{
        
        this.title[i]=[];
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
        this.title[i].push(value);
         
        var value =childSnapshot.child("Category").val();
        this.title[i].push(value);
        //this.category.push(value);
        var value =childSnapshot.child("Sub_category").val();
        //this.sub_category.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("price").val();
        //this.price.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("source").val();
        //this.source.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("published_year").val();
        //this.publishedyear.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("Publication").val();
        //this.publication.push(value);
        this.title[i].push(value);
        var value =childSnapshot.child("author_name").val();
        //this.authorname.push(value);
        this.title[i].push(value);
        //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
        i++;
      })        
    });
  }
  
}
