import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickStartPage } from './quick-start';

@NgModule({
  declarations: [
    QuickStartPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickStartPage),
  ],
})
export class QuickStartPageModule {}
