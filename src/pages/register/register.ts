import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  hideCloseIcon = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  homePage(){
    this.navCtrl.push(HomePage);
  }

  selectChange(e) {
    this.hideShowCloseIcon(e);
    console.log(e);
  }

  hideShowCloseIcon(e){
    if(e==0){
      this.hideCloseIcon = true;
    }else{
      this.hideCloseIcon = false;
    }
  }

  welcomePage(){
    this.navCtrl.push(WelcomePage);
  }

}
