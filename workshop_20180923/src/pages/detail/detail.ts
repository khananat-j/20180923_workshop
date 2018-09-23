import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { DomSanitizer }from '@angular/platform-browser';
import { NavParams }from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class detailPage {
item;
url;

  constructor(public navCtrl: NavController,public navParams: NavParams,private sanitized: DomSanitizer) {
    this.item = navParams.get('myitem');
    this.url = this.item.url;
    console.log(this.item.name);
  }
}

