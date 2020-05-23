import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDePedidoPage } from './historial-de-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDePedidoPageRoutingModule {}
