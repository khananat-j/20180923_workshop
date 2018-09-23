import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items =[
    {id: 1,name:"Living Museum" ,addess:"Bkk",Image:"assets/imgs/text_head01.png",url:"https://www.youtube.com/embed/r0YyR0_SG5k",video:"assets/video/olo.mp4"},
    {id: 2,name:"Historical Park",addess:"Bkk",Image:"assets/imgs/text_head02.png",url:"https://www.youtube.com/embed/yyia9VaZwJs"},
    {id: 3,name:"Tecnologly",addess:"Bkk",Image:"assets/imgs/text_head03.png",url:"https://www.youtube.com/embed/iDykNfEAt7Q"}];

  constructor(public navCtrl: NavController) {

  
  }
  itemSelected(item){
    console.log("clicked item:" + item.name);
    this.navCtrl.push(detailPage,{myitem : item})
  
  }
}
