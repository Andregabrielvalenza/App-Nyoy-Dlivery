import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionPlatoPage } from './descripcion-plato.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionPlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionPlatoPageRoutingModule {}
