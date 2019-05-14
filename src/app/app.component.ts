import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { MyEarningsPage } from '../pages/my-earnings/my-earnings';
import { ReferralsPage } from '../pages/referrals/referrals';
import { MessagesPage } from '../pages/messages/messages';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
import { WelcomePage } from '../pages/welcome/welcome';
import { DetailMarketPage } from '../pages/detail-market/detail-market';
import { DetailCommunityPage } from '../pages/detail-community/detail-community';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DetailCommunityPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'My Earnings', component: MyEarningsPage },
      { title: 'Referrals', component: ReferralsPage },
      { title: 'Messages', component: MessagesPage },
      { title: 'FAQs', component: FaqsPage },
      { title: 'Contact Surenx', component: ContactPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  welcomePage(){
    this.nav.setRoot(WelcomePage);
  }
}
