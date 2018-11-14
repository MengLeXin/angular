import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'BPage';
  // tab5Root = 'CPage';
  tab6Root = 'MinePage';
  // tab7Root = 'JiajuPage';


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
    
  }
  ionViewDidLoad() {
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal=this.modalCtrl.create(AddPage);
      profileModal.present();
    },false)

      
  }

}
