import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

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
