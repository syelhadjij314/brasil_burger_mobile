import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuritePageRoutingModule } from './securite-routing.module';

import { SecuritePage } from './securite.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';
import { StorageService } from '../shared/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecuritePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [SecuritePage],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    AuthService,
    CommandeService,
    StorageService
  ]

})
export class SecuritePageModule {}
