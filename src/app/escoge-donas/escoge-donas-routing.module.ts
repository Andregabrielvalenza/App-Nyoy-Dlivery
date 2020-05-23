import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscogeDonasPage } from './escoge-donas.page';

const routes: Routes = [
  {
    path: '',
    component: EscogeDonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscogeDonasPageRoutingModule {}
