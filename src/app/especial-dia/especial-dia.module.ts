import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialDiaPageRoutingModule } from './especial-dia-routing.module';

import { EspecialDiaPage } from './especial-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialDiaPageRoutingModule
  ],
  declarations: [EspecialDiaPage]
})
export class EspecialDiaPageModule {}
