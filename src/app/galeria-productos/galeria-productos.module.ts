import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaProductosPageRoutingModule } from './galeria-productos-routing.module';

import { GaleriaProductosPage } from './galeria-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaProductosPageRoutingModule
  ],
  declarations: [GaleriaProductosPage]
})
export class GaleriaProductosPageModule {}
