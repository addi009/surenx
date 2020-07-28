import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailMarketPage } from '../detail-market/detail-market';
import { DetailCommunityPage } from '../detail-community/detail-community';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  market1: any = {
    id: 1,
    title: "Auto & Home Insurance",
    description:  "For those who care for road and drive safety.",
    image:  "../../assets/imgs/home/auto insursnce form.png"
  }
  market2: any = {
    id: 2,
    title: "Travel Insurance",
    description:  "Travel worry free and only bring happy memories back.",
    image:  "../../assets/imgs/home/travel.png"
  }
  market3: any = {
    id: 3,
    title: "Life Insurance",
    description:  "Because nothing is more beautiful than family.",
    image:  "../../assets/imgs/home/life insurance icon.png"
  }
  

  community0: any = {
    id: 0,
    title: "Health & Active Lifestyle",
    description:  "Know someone who is passionate about our enviornment? Invite them here and get rewarded when they join and obtain an insurance quote.",
    image:  "../../assets/imgs/home/Community Active 1.png"
  }
  community1: any = {
    id: 1,
    title: "Saving Our Planet Together",
    description:  "Invite all road saftey enthusiasts to join our community. Know a responsible driver? Invite them to experience our insurance products.",
    image:  "../../assets/imgs/home/Community Env 1.png"
  }
  community2: any = {
    id: 2,
    title: "Making Our Roads Safer",
    description:  "When one person in family lives a healthy lifestyle, others benefit too. Let's build up our Surnex community with those who care.",
    image:  "../../assets/imgs/home/Road Safer.png"
  }

  markets: any [];
  communities: any [];

  constructor(public navCtrl: NavController) {
    this.markets = [this.market1, this.market2, this.market3];
    this.communities = [this.community0, this.community1, this.community2];
  }

  detailMarket(id){
    this.navCtrl.setRoot(DetailMarketPage);
  }

  detailCommunity(id){
    this.navCtrl.push(DetailCommunityPage, {
      data: id
    });
  }
}
