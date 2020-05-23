import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaProductosPage } from './galeria-productos.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaProductosPageRoutingModule {}
