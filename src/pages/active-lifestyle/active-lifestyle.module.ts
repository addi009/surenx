import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveLifestylePage } from './active-lifestyle';

@NgModule({
  declarations: [
    ActiveLifestylePage,
  ],
  imports: [
    IonicPageModule.forChild(ActiveLifestylePage),
  ],
})
export class ActiveLifestylePageModule {}
