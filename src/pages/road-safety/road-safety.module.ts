import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadSafetyPage } from './road-safety';

@NgModule({
  declarations: [
    RoadSafetyPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadSafetyPage),
  ],
})
export class RoadSafetyPageModule {}
