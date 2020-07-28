import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStepperModule } from 'ionic-stepper';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DetailMarketPage } from '../pages/detail-market/detail-market';
import { DetailCommunityPage } from '../pages/detail-community/detail-community';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HowItWorksPage } from '../pages/how-it-works/how-it-works';
import { ActiveLifestylePage } from '../pages/active-lifestyle/active-lifestyle';
import { RoadSafetyPage } from '../pages/road-safety/road-safety';
import { SavingPlanetPage } from '../pages/saving-planet/saving-planet';
import { QuickStartPage } from '../pages/quick-start/quick-start';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    FaqsPage,
    ContactPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    DetailMarketPage,
    DetailCommunityPage,
    NotificationsPage,
    HowItWorksPage,
    ActiveLifestylePage,
    RoadSafetyPage,
    SavingPlanetPage,
    QuickStartPage
  ],
  imports: [
    BrowserModule,
    IonicStepperModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    FaqsPage,
    ContactPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    DetailMarketPage,
    DetailCommunityPage,
    NotificationsPage,
    HowItWorksPage,
    ActiveLifestylePage,
    RoadSafetyPage,
    SavingPlanetPage,
    QuickStartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
