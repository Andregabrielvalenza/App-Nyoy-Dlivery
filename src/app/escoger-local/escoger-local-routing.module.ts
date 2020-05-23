import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscogerLocalPage } from './escoger-local.page';

const routes: Routes = [
  {
    path: '',
    component: EscogerLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscogerLocalPageRoutingModule {}
