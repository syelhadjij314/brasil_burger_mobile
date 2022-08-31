import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPage } from './detail.page';
import { DetailPageRoutingModule } from './detail-routing.module';
import { CatalogueService } from '../shared/services/catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailService } from '../shared/services/detail.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DetailPage],
  providers: [
    CatalogueService,
    DetailService
  ]
})
export class DetailPageModule {}
