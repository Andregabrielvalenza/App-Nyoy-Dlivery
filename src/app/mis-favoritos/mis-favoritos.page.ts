import { Component, OnInit } from '@angular/core';

import { MenuController, NavController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.page.html',
  styleUrls: ['./mis-favoritos.page.scss'],
})
export class MisFavoritosPage implements OnInit {

  constructor(private menu:MenuController,
    private navCtrl: NavController,
    public popoverController: PopoverController) { }

  ngOnInit() {
  }

  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }

}
