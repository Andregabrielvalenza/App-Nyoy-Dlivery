import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialDiaPage } from './especial-dia.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialDiaPageRoutingModule {}
