import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-escoger-local',
  templateUrl: './escoger-local.page.html',
  styleUrls: ['./escoger-local.page.scss'],
})
export class EscogerLocalPage implements OnInit {

  constructor(
    private menu:MenuController,
              private navCtrl: NavController,
              public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
