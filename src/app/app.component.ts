import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
import { WelcomePage } from '../pages/welcome/welcome';
import { DetailMarketPage } from '../pages/detail-market/detail-market';
import { DetailCommunityPage } from '../pages/detail-community/detail-community';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HowItWorksPage } from '../pages/how-it-works/how-it-works';
import { ActiveLifestylePage } from '../pages/active-lifestyle/active-lifestyle';
import { RoadSafetyPage } from '../pages/road-safety/road-safety';
import { SavingPlanetPage } from '../pages/saving-planet/saving-planet';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NotificationsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Notifications', component: NotificationsPage },
      { title: 'How it works?', component: HowItWorksPage },
      { title: 'Active Lifestyle +', component: ActiveLifestylePage },
      { title: 'Road Safety +', component: RoadSafetyPage },
      { title: 'Saving Planet +', component: SavingPlanetPage },
      { title: 'FAQs', component: FaqsPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Settings', component: SettingsPage }
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

  homePage(){
    this.nav.setRoot(HomePage);
  }

  
}
