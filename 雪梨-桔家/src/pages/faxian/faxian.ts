import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the FaxianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-faxian',
  templateUrl: 'faxian.html',
})
export class FaxianPage {
  @ViewChild(Slides) slides:Slides;
  icons:string="camera";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
        console.log(this.slides.getActiveIndex());
        console.log(this.navParams.get('id'));
        console.log(this.navParams.data);
  }

}

