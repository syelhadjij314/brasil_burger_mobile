import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierPage } from './panier.page';
import { PanierPageRoutingModule } from './panier-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // RouterModule.forChild([{ path: 'panier', component: Tab3Page }]),
    PanierPageRoutingModule,
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
