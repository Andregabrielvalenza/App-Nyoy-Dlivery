import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoMercadoPage } from './carrito-mercado.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoMercadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoMercadoPageRoutingModule {}
