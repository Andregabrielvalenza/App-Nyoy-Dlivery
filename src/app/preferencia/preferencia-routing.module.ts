import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferenciaPage } from './preferencia.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenciaPageRoutingModule {}
