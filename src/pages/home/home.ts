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
    title: "Auto Insurance",
    description:  "Care for Road Saftey? We too come join out group!",
    image:  "https://picsum.photos/id/230/400/300"
  }
  market2: any = {
    id: 2,
    title: "Home Insurance",
    description:  "Insurance should be simpler. Hence we created this one.",
    image:  "https://picsum.photos/id/231/400/300"
  }
  market3: any = {
    id: 3,
    title: "Pets Insurance",
    description:  "Lorem Ipsum is simply dummy text of the printing.",
    image:  "https://picsum.photos/id/232/400/300"
  }
  market4: any = {
    id: 4,
    title: "Life Insurance",
    description:  "Your family is beautiful. Their future should be too. Plan it now.",
    image:  "https://picsum.photos/id/233/400/300"
  }
  market5: any = {
    id: 5,
    title: "Small Business Insurance",
    description:  "Lorem Ipsum is simply dummy text of the printing.",
    image:  "https://picsum.photos/id/234/400/300"
  }
  market6: any = {
    id: 6,
    title: "Renters Insurance",
    description:  "Protect what matters. Crafted for house and condo renters.",
    image:  "https://picsum.photos/id/235/400/300"
  }
  

  community1: any = {
    title: "Protecting our Enviornment",
    description:  "Know someone who is passionate about our enviornment? Invite them here and get rewarded when they join and obtain an insurance quote.",
    image:  "https://picsum.photos/id/240/300/300"
  }
  community2: any = {
    title: "Road and Driver Saftey",
    description:  "Invite all road saftey enthusiasts to join our community. Know a responsible driver? Invite them to experience our insurance products.",
    image:  "https://picsum.photos/id/241/300/300"
  }
  community3: any = {
    title: "Health & Active Lifestyle",
    description:  "When one person in family lives a healthy lifestyle, others benefit too. Let's build up our Surnex community with those who care.",
    image:  "https://picsum.photos/id/242/300/300"
  }

  markets: any [];
  communities: any [];

  constructor(public navCtrl: NavController) {
    this.markets = [this.market1, this.market2, this.market3, this.market4, this.market5, this.market6];
    this.communities = [this.community1, this.community2, this.community3];
  }

  detailMarket(id){
    this.navCtrl.setRoot(DetailMarketPage);
  }

  detailCommunity(id){
    this.navCtrl.setRoot(DetailCommunityPage);
  }
}
