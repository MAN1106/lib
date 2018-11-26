import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookpagePage } from './bookpage';

@NgModule({
  declarations: [
    BookpagePage,
  ],
  imports: [
    IonicPageModule.forChild(BookpagePage),
  ],
})
export class BookpagePageModule {}
