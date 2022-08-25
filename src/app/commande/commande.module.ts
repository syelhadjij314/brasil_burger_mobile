import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';

import { CommandePage } from './commande.page';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandePageRoutingModule,
    HttpClientModule
  ],
  declarations: [CommandePage],
  providers: [
    CommandeService,
    
  ]
})
export class CommandePageModule {}
