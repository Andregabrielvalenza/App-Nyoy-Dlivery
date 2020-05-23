import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoMercadoPageRoutingModule } from './carrito-mercado-routing.module';

import { CarritoMercadoPage } from './carrito-mercado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoMercadoPageRoutingModule
  ],
  declarations: [CarritoMercadoPage]
})
export class CarritoMercadoPageModule {}
