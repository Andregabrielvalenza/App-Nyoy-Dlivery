import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenciaPageRoutingModule } from './preferencia-routing.module';

import { PreferenciaPage } from './preferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenciaPageRoutingModule
  ],
  declarations: [PreferenciaPage]
})
export class PreferenciaPageModule {}
