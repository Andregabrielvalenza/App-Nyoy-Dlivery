import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionPlatoPageRoutingModule } from './descripcion-plato-routing.module';

import { DescripcionPlatoPage } from './descripcion-plato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionPlatoPageRoutingModule
  ],
  declarations: [DescripcionPlatoPage]
})
export class DescripcionPlatoPageModule {}
