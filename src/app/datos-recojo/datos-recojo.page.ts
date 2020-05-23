import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-datos-recojo',
  templateUrl: './datos-recojo.page.html',
  styleUrls: ['./datos-recojo.page.scss'],
})
export class DatosRecojoPage implements OnInit {

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
