import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeletePage } from '../pages/delete/delete';
import { InsertPage } from '../pages/insert/insert';
import { UpdatePage } from '../pages/update/update';
import { GooglePlus } from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { CategoryPage } from '../pages/category/category';
import { ViewListPage } from '../pages/view-list/view-list';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { ScpagePage } from '../pages/scpage/scpage';
import { BookpagePage } from '../pages/bookpage/bookpage';
import { SignupPage } from '../pages/signup/signup';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { SearchPage } from '../pages/search/search';
import { MyprofilePage } from '../pages/myprofile/myprofile';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeletePage,
    InsertPage,
    UpdatePage,
    ScpagePage,
    BookpagePage,
    CategoryPage,
    SignupPage,
    SearchPage,
    MyprofilePage,
    LoggedinPage,
    SubcategoryPage,
    ViewListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScpagePage,
    CategoryPage,
    HomePage,
    SignupPage,
    LoggedinPage,
    ViewListPage,
    DeletePage,
    SearchPage,
    BookpagePage,
    MyprofilePage,
    SubcategoryPage,
    InsertPage,
    UpdatePage
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
