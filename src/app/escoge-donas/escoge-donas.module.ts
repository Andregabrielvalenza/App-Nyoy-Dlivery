import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscogeDonasPageRoutingModule } from './escoge-donas-routing.module';

import { EscogeDonasPage } from './escoge-donas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscogeDonasPageRoutingModule
  ],
  declarations: [EscogeDonasPage]
})
export class EscogeDonasPageModule {}
