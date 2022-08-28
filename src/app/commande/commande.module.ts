import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';

import { CommandePage } from './commande.page';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  declarations: [CommandePage],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    CommandeService,    
  ]
})
export class CommandePageModule {}
