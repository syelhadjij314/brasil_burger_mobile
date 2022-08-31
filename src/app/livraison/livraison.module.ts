import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LivraisonPageRoutingModule } from './livraison-routing.module';

import { LivraisonPage } from './livraison.page';
import { CardComponent } from '../card/card.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraisonPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [
    LivraisonPage,
    CardComponent
  ],
  providers: [
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

})
export class LivraisonPageModule {}
