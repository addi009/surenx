import { NgModule } from '@angular/core';
import { IonicPageModule, AlertController  } from 'ionic-angular';
import { NotificationsPage } from './notifications';

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
  ],
})
export class NotificationsPageModule {
  
  constructor(public alertCtrl: AlertController){}

  // showAlert() {
  //   const alert = this.alertCtrl.create({
  //     title: 'Product Alert!',
  //     subTitle: 'We are excited to accounce that we are adding a new great products to our surenx',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
