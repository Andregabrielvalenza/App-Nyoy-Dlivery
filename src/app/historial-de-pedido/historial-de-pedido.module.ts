import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDePedidoPageRoutingModule } from './historial-de-pedido-routing.module';

import { HistorialDePedidoPage } from './historial-de-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDePedidoPageRoutingModule
  ],
  declarations: [HistorialDePedidoPage]
})
export class HistorialDePedidoPageModule {}
