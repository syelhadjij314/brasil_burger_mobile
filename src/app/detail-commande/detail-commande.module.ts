import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommandePageRoutingModule } from './detail-commande-routing.module';

import { DetailCommandePage } from './detail-commande.page';
import { CommandeService } from '../shared/services/commande.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCommandePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DetailCommandePage],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    CommandeService
  ]
})
export class DetailCommandePageModule {}
