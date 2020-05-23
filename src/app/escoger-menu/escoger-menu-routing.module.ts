import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscogerMenuPage } from './escoger-menu.page';

const routes: Routes = [
  {
    path: '',
    component: EscogerMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscogerMenuPageRoutingModule {}
