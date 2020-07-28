import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the DetailCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-community',
  templateUrl: 'detail-community.html',
})
export class DetailCommunityPage {
  
  id: any;
  
  data1: any = {
    image:"../../assets/imgs/detail-community/Community Page - ACTIVE.jpg",
    heading:"Healthy & Active Lifestyle",
    text:'<p style="color:#2b3a75 !important">When one person in a family lives healthy lifestyle, it positively impacts many others.</p><br><br>Insurance companies want their customers to live longer, healthier and happier. That’s a win-win. Surenx believes that people living disciplined healthy and active lives usually stick together and therefore know others who are like them. General rule is that such disciplined people make great insurance customers too.<br><br>For the first time in the insurance world, Surenx is bringing together people living healthy and active lifestyle through a community referral program that not only pays for Life Insurance referrals, but also many other insurance products Surenx offers.<br><br>By joining Surenx and inviting your friends and family members who you believe belong to the group, you help spreading awareness that benefits our communities. Surenx community awareness program is run through our social media presence and periodically runs contests and awards surprise gifts to active participants.<br><br>Surenx is an app based referral program that allows you to earn rewards for bringing like minded people together in one of our three focused communities addressing corporate social responsibility of our partner insurance companies.'
  }
  data2: any = {
    image:"../../assets/imgs/detail-community/Community Page - ENV.jpg",
    heading:"Saving Our Planet Together",
    text:"<span style='color:#2b3a75'>Climate change is one of the most significant risk to all industries.</span><br><br>We invite you to join and bring along your friends and family to help with community awareness in how climate change will impact our and future generations’ lives and what we can do about it.<br><br>Insurance companies want people to be aware of the risks associated with increasing frequency and severity of extreme weather events and what can they do to protect themselves and their property against such events and be proactive about helping the planet. Through this community, Surenx aims to create awareness about how we can help save our amazing rock and keep it smiling for our coming generations. After all, we owe it to them. Surenx community awareness program is run through our social media presence and periodically runs contests and awards surprise gifts to active participants.<br><br>Surenx is an app based referral program that allows you to earn rewards for bringing like minded people together in one of our three focused communities addressing corporate social responsibility of our partner insurance companies."
  }
  data3: any = {
    image:"../../assets/imgs/detail-community/Community Pafe - Drive.jpg",
    heading:"Making Our Roads Safer",
    text:"<span style='color:#2b3a75'>Road Safety is a shared responsibility, yet most of us know at least one such person in our social circle that needs a constant reminder.</span><br><br> Through this community, Surenx invites you and your friends and family to join our community awareness efforts in making our roads safer for everyone using them, especially the more vulnerable ones i.e. pedestrians and children. A single accident affects many lives and indirectly it also adds to the overall premium increases for everyone. Year over year, many of us have experienced more expensive auto insurance even without making a claim. It has never been more important to come together as a community and help each other with constant reminders to be alert of the vulnerable ones while driving.<br><br>Surenx community awareness program is run through our social media presence and periodically runs contests and awards surprise gifts to active participants.<br><br>Surenx is an app based referral program that allows you to earn rewards for bringing like minded people together in one of our three focused communities addressing corporate social responsibility of our partner insurance companies."
  }

  data: any [];
  current_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('data');
    this.data = [this.data1, this.data2, this.data3];
    this.current_data = this.data[this.id];
  }

  ionViewDidLoad() {
    //console.log(this.id);
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
