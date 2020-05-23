import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscogerLocalPageRoutingModule } from './escoger-local-routing.module';

import { EscogerLocalPage } from './escoger-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscogerLocalPageRoutingModule
  ],
  declarations: [EscogerLocalPage]
})
export class EscogerLocalPageModule {}
