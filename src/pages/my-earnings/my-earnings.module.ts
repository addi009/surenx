import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyEarningsPage } from './my-earnings';

@NgModule({
  declarations: [
    MyEarningsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyEarningsPage),
  ],
})
export class MyEarningsPageModule {}
