import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscogerMenuPageRoutingModule } from './escoger-menu-routing.module';

import { EscogerMenuPage } from './escoger-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscogerMenuPageRoutingModule
  ],
  declarations: [EscogerMenuPage]
})
export class EscogerMenuPageModule {}
